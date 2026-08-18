const touchpad = document.getElementById("touchpad");

let lastX = 0;
let lastY = 0;

let touchStartTime = 0;

let moved = false;


// Send mouse movement to the laptop
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


// Touch starts
touchpad.addEventListener("touchstart", function(event) {

    event.preventDefault();

    const touch = event.touches[0];

    lastX = touch.clientX;
    lastY = touch.clientY;

    touchStartTime = Date.now();

    moved = false;

}, { passive: false });


// Finger moves
touchpad.addEventListener("touchmove", function(event) {

    event.preventDefault();

    const touch = event.touches[0];

    const currentX = touch.clientX;
    const currentY = touch.clientY;


    const rawDX = currentX - lastX;
    const rawDY = currentY - lastY;


    if (Math.abs(rawDX) > 0 || Math.abs(rawDY) > 0) {

        moved = true;

        // Sensitivity
        const sensitivity = 1.8;

        const dx = rawDX * sensitivity;
        const dy = rawDY * sensitivity;

        moveMouse(dx, dy);

    }


    lastX = currentX;
    lastY = currentY;

}, { passive: false });


// Finger released
touchpad.addEventListener("touchend", function(event) {

    event.preventDefault();

    const touchDuration = Date.now() - touchStartTime;


    // Short tap without movement = left click
    if (!moved && touchDuration < 300) {

        leftClick();

    }

}, { passive: false });


// Left click
async function leftClick() {

    try {

        await fetch("/api/mouse/click", {
            method: "POST"
        });

    } catch (error) {

        console.error("Left click error:", error);

    }

}


// Right click button
document
    .getElementById("right-click")
    .addEventListener("click", async function() {

        try {

            await fetch("/api/mouse/right-click", {
                method: "POST"
            });

        } catch (error) {

            console.error("Right click error:", error);

        }

    });


// Left click button
document
    .getElementById("left-click")
    .addEventListener("click", leftClick);


// Double click
document
    .getElementById("double-click")
    .addEventListener("click", async function() {

        try {

            await fetch("/api/mouse/double-click", {
                method: "POST"
            });

        } catch (error) {

            console.error("Double click error:", error);

        }

    });


// Scroll up
document
    .getElementById("scroll-up")
    .addEventListener("click", async function() {

        try {

            await fetch("/api/mouse/scroll", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    amount: 5
                })

            });

        } catch (error) {

            console.error("Scroll error:", error);

        }

    });


// Scroll down
document
    .getElementById("scroll-down")
    .addEventListener("click", async function() {

        try {

            await fetch("/api/mouse/scroll", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    amount: -5
                })

            });

        } catch (error) {

            console.error("Scroll error:", error);

        }

    });