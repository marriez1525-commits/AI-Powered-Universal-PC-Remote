const touchpad = document.getElementById("touchpad");

let lastX = 0;
let lastY = 0;

let touchStartTime = 0;
let moved = false;

let lastTapTime = 0;


// ================================
// MOUSE MOVEMENT
// ================================

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

        console.error("Mouse movement error:", error);

    }
}


// ================================
// SCROLL
// ================================

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

        console.error("Scroll error:", error);

    }
}


// ================================
// TOUCH START
// ================================

touchpad.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        const touch = event.touches[0];

        lastX = touch.clientX;
        lastY = touch.clientY;

        touchStartTime = Date.now();

        moved = false;

    },
    { passive: false }
);


// ================================
// TOUCH MOVE
// ================================

touchpad.addEventListener(
    "touchmove",
    function(event) {

        event.preventDefault();


        // =====================================
        // TWO FINGER MOVEMENT = SCROLL
        // =====================================

        if (event.touches.length === 2) {

            const touch1 = event.touches[0];
            const touch2 = event.touches[1];


            const centerY =
                (touch1.clientY + touch2.clientY) / 2;

            const centerX =
                (touch1.clientX + touch2.clientX) / 2;


            const dy = centerY - lastY;
            const dx = centerX - lastX;


            // Vertical scrolling
            if (Math.abs(dy) > 2) {

                const scrollAmount =
                    dy > 0 ? -1 : 1;

                scrollMouse(scrollAmount * 2);

            }


            lastX = centerX;
            lastY = centerY;

            return;
        }


        // =====================================
        // ONE FINGER = CURSOR MOVEMENT
        // =====================================

        if (event.touches.length === 1) {

            const touch = event.touches[0];

            const currentX = touch.clientX;
            const currentY = touch.clientY;


            const rawDX = currentX - lastX;
            const rawDY = currentY - lastY;


            if (
                Math.abs(rawDX) > 0 ||
                Math.abs(rawDY) > 0
            ) {

                moved = true;


                // Mouse sensitivity
                const sensitivity = 1.8;


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


// ================================
// TOUCH END
// ================================

touchpad.addEventListener(
    "touchend",
    function(event) {

        event.preventDefault();


        // Don't click if there was movement
        if (moved) {
            return;
        }


        const duration =
            Date.now() - touchStartTime;


        // Only short tap
        if (duration < 300) {

            const currentTime =
                Date.now();


            // Double tap detection
            if (
                currentTime - lastTapTime < 350
            ) {

                doubleClick();

                lastTapTime = 0;

            } else {

                leftClick();

                lastTapTime = currentTime;

            }

        }

    },
    { passive: false }
);


// ================================
// LEFT CLICK
// ================================

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


// ================================
// RIGHT CLICK
// ================================

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


// ================================
// DOUBLE CLICK
// ================================

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


// ================================
// BUTTONS
// ================================

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