const touchpad = document.getElementById("touchpad");


// ==========================================
// VARIABLES
// ==========================================

let lastX = 0;
let lastY = 0;

let touchStartTime = 0;

let moved = false;

let lastTapTime = 0;

let gestureType = "none";

// Drag variables
let holdTimer = null;
let isDragging = false;


// ==========================================
// SETTINGS
// ==========================================

// Cursor sensitivity
const sensitivity = 4;

// Minimum movement before scrolling
const scrollThreshold = 2;

// Scroll speed
const scrollSpeed = 8;

// Time required to activate drag
const dragHoldTime = 500;


// ==========================================
// MOUSE MOVEMENT
// ==========================================

async function moveMouse(dx, dy) {

    try {

        await fetch("/api/mouse/move", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                dx: dx,
                dy: dy
            })

        });

    } catch (error) {

        console.error(
            "Mouse movement error:",
            error
        );

    }

}


// ==========================================
// SCROLL
// ==========================================

async function scrollMouse(amount) {

    try {

        await fetch("/api/mouse/scroll", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                amount: amount
            })

        });

    } catch (error) {

        console.error(
            "Scroll error:",
            error
        );

    }

}


// ==========================================
// DRAG START
// ==========================================

async function dragStart() {

    try {

        await fetch(
            "/api/mouse/drag-start",
            {
                method: "POST"
            }
        );

        isDragging = true;

        console.log("Drag started");

    } catch (error) {

        console.error(
            "Drag start error:",
            error
        );

    }

}


// ==========================================
// DRAG END
// ==========================================

async function dragEnd() {

    try {

        await fetch(
            "/api/mouse/drag-end",
            {
                method: "POST"
            }
        );

        isDragging = false;

        console.log("Drag ended");

    } catch (error) {

        console.error(
            "Drag end error:",
            error
        );

    }

}


// ==========================================
// TOUCH START
// ==========================================

touchpad.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();


        // ======================================
        // TWO FINGER TOUCH
        // ======================================

        if (event.touches.length === 2) {

            // Cancel possible drag timer

            clearTimeout(holdTimer);

            holdTimer = null;

            isDragging = false;


            gestureType = "scroll";

            moved = true;


            const touch1 = event.touches[0];
            const touch2 = event.touches[1];


            // Calculate CENTER between fingers

            lastX =
                (touch1.clientX + touch2.clientX) / 2;

            lastY =
                (touch1.clientY + touch2.clientY) / 2;


            return;
        }


        // ======================================
        // ONE FINGER TOUCH
        // ======================================

        if (event.touches.length === 1) {

            gestureType = "mouse";

            moved = false;

            isDragging = false;


            const touch = event.touches[0];


            lastX = touch.clientX;
            lastY = touch.clientY;


            touchStartTime = Date.now();


            // ==================================
            // START DRAG HOLD TIMER
            // ==================================

            clearTimeout(holdTimer);


            holdTimer = setTimeout(
                function() {

                    // Only start drag if:
                    // - still one finger
                    // - finger hasn't moved

                    if (
                        !moved &&
                        gestureType === "mouse"
                    ) {

                        dragStart();

                    }

                },
                dragHoldTime
            );

        }

    },
    { passive: false }
);


// ==========================================
// TOUCH MOVE
// ==========================================

touchpad.addEventListener(
    "touchmove",
    function(event) {

        event.preventDefault();


        // ======================================
        // TWO FINGER SCROLL
        // ======================================

        if (event.touches.length === 2) {

            // Cancel drag

            clearTimeout(holdTimer);

            holdTimer = null;


            gestureType = "scroll";

            moved = true;


            const touch1 = event.touches[0];
            const touch2 = event.touches[1];


            // Find center of the two fingers

            const centerX =
                (touch1.clientX + touch2.clientX) / 2;

            const centerY =
                (touch1.clientY + touch2.clientY) / 2;


            const dy =
                centerY - lastY;


            // Only vertical scrolling

            if (
                Math.abs(dy) >= scrollThreshold
            ) {

                if (dy < 0) {

                    // Fingers moving UP

                    scrollMouse(scrollSpeed);

                } else {

                    // Fingers moving DOWN

                    scrollMouse(-scrollSpeed);

                }

            }


            // Update center position

            lastX = centerX;
            lastY = centerY;


            return;
        }


        // ======================================
        // ONE FINGER CURSOR / DRAG
        // ======================================

        if (
            event.touches.length === 1 &&
            gestureType === "mouse"
        ) {

            const touch = event.touches[0];


            const currentX =
                touch.clientX;

            const currentY =
                touch.clientY;


            const rawDX =
                currentX - lastX;

            const rawDY =
                currentY - lastY;


            if (
                Math.abs(rawDX) > 0 ||
                Math.abs(rawDY) > 0
            ) {

                moved = true;


                // ==================================
                // CANCEL HOLD IF NOT DRAGGING
                // ==================================

                if (!isDragging) {

                    clearTimeout(holdTimer);

                    holdTimer = null;

                }


                // ==================================
                // CURSOR MOVEMENT
                // ==================================

                const dx =
                    rawDX * sensitivity;

                const dy =
                    rawDY * sensitivity;


                moveMouse(dx, dy);

            }


            lastX = currentX;
            lastY = currentY;

        }

    },
    { passive: false }
);


// ==========================================
// TOUCH END
// ==========================================

touchpad.addEventListener(
    "touchend",
    function(event) {

        event.preventDefault();


        // ======================================
        // CANCEL HOLD TIMER
        // ======================================

        clearTimeout(holdTimer);

        holdTimer = null;


        // ======================================
        // WAIT FOR ALL FINGERS
        // ======================================

        if (event.touches.length > 0) {

            return;

        }


        // ======================================
        // END DRAG
        // ======================================

        if (isDragging) {

            dragEnd();

            gestureType = "none";

            moved = false;

            return;

        }


        // ======================================
        // TWO FINGER SCROLL
        // ======================================

        if (gestureType === "scroll") {

            gestureType = "none";

            moved = false;

            return;

        }


        // ======================================
        // MOVED FINGER = NO CLICK
        // ======================================

        if (moved) {

            gestureType = "none";

            return;

        }


        // ======================================
        // SHORT TAP = CLICK
        // ======================================

        const duration =
            Date.now() - touchStartTime;


        if (duration < 300) {

            const currentTime =
                Date.now();


            // ==================================
            // DOUBLE TAP
            // ==================================

            if (
                currentTime - lastTapTime < 350
            ) {

                doubleClick();

                lastTapTime = 0;

            }

            // ==================================
            // SINGLE TAP
            // ==================================

            else {

                leftClick();

                lastTapTime = currentTime;

            }

        }


        gestureType = "none";

    },
    { passive: false }
);


// ==========================================
// LEFT CLICK
// ==========================================

async function leftClick() {

    try {

        await fetch(
            "/api/mouse/click",
            {
                method: "POST"
            }
        );

    } catch (error) {

        console.error(
            "Left click error:",
            error
        );

    }

}


// ==========================================
// RIGHT CLICK
// ==========================================

async function rightClick() {

    try {

        await fetch(
            "/api/mouse/right-click",
            {
                method: "POST"
            }
        );

    } catch (error) {

        console.error(
            "Right click error:",
            error
        );

    }

}


// ==========================================
// DOUBLE CLICK
// ==========================================

async function doubleClick() {

    try {

        await fetch(
            "/api/mouse/double-click",
            {
                method: "POST"
            }
        );

    } catch (error) {

        console.error(
            "Double click error:",
            error
        );

    }

}


// ==========================================
// BUTTONS
// ==========================================

document
    .getElementById("left-click")
    .addEventListener(
        "click",
        leftClick
    );


document
    .getElementById("right-click")
    .addEventListener(
        "click",
        rightClick
    );


document
    .getElementById("double-click")
    .addEventListener(
        "click",
        doubleClick
    );