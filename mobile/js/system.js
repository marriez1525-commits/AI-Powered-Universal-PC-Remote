// ==========================================
// SYSTEM CONTROL
// ==========================================


// ==========================================
// SEND SYSTEM COMMAND
// ==========================================

async function sendSystemCommand(command) {

    try {

        const response = await fetch(
            `/api/system/${command}`,
            {
                method: "POST"
            }
        );

        const data = await response.json();

        console.log(
            "System command:",
            command,
            data
        );

    } catch (error) {

        console.error(
            "System command error:",
            error
        );

    }
}


// ==========================================
// SET BRIGHTNESS
// ==========================================

async function setBrightness(value) {

    value = Number(value);

    // Keep brightness between 0 and 100
    value = Math.max(
        0,
        Math.min(100, value)
    );

    try {

        const response = await fetch(
            "/api/system/brightness",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    value: value
                })
            }
        );

        const data = await response.json();

        console.log(
            "Brightness:",
            data
        );

        if (!data.success) {

            console.error(
                "Brightness error:",
                data.error
            );

        }

    } catch (error) {

        console.error(
            "Brightness command error:",
            error
        );

    }
}


// ==========================================
// BRIGHTNESS SLIDER
// ==========================================

const brightnessSlider =
    document.getElementById(
        "brightness-slider"
    );

const brightnessValue =
    document.getElementById(
        "brightness-value"
    );


if (brightnessSlider) {

    brightnessSlider.addEventListener(
        "input",
        function () {

            const value =
                Number(this.value);

            if (brightnessValue) {

                brightnessValue.textContent =
                    `${value}%`;

            }

        }
    );


    brightnessSlider.addEventListener(
        "change",
        function () {

            setBrightness(
                this.value
            );

        }
    );

}


// ==========================================
// BRIGHTNESS DOWN
// ==========================================

const brightnessDown =
    document.getElementById(
        "brightness-down"
    );


if (brightnessDown) {

    brightnessDown.addEventListener(
        "click",
        function () {

            if (!brightnessSlider) {
                return;
            }

            let value =
                Number(brightnessSlider.value);

            value -= 10;

            value =
                Math.max(0, value);

            brightnessSlider.value =
                value;

            if (brightnessValue) {

                brightnessValue.textContent =
                    `${value}%`;

            }

            setBrightness(value);

        }
    );

}


// ==========================================
// BRIGHTNESS UP
// ==========================================

const brightnessUp =
    document.getElementById(
        "brightness-up"
    );


if (brightnessUp) {

    brightnessUp.addEventListener(
        "click",
        function () {

            if (!brightnessSlider) {
                return;
            }

            let value =
                Number(brightnessSlider.value);

            value += 10;

            value =
                Math.min(100, value);

            brightnessSlider.value =
                value;

            if (brightnessValue) {

                brightnessValue.textContent =
                    `${value}%`;

            }

            setBrightness(value);

        }
    );

}
// ==========================================
// BRIGHTNESS UP
// ==========================================

const brightnessUpButton =
    document.getElementById("brightness-up");

if (brightnessUpButton) {
    brightnessUpButton.addEventListener(
        "click",
        function () {
            sendSystemCommand("brightness-up");
        }
    );
}


// ==========================================
// BRIGHTNESS DOWN
// ==========================================

const brightnessDownButton =
    document.getElementById("brightness-down");

if (brightnessDownButton) {
    brightnessDownButton.addEventListener(
        "click",
        function () {
            sendSystemCommand("brightness-down");
        }
    );
}

// ==========================================
// LOCK
// ==========================================

const lockButton =
    document.getElementById(
        "system-lock"
    );


if (lockButton) {

    lockButton.addEventListener(
        "click",
        function() {

            sendSystemCommand(
                "lock"
            );

        }
    );

}


// ==========================================
// SLEEP
// ==========================================

const sleepButton =
    document.getElementById(
        "system-sleep"
    );


if (sleepButton) {

    sleepButton.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "Put your PC to sleep?"
                );

            if (confirmed) {

                sendSystemCommand(
                    "sleep"
                );

            }

        }
    );

}


// ==========================================
// RESTART
// ==========================================

const restartButton =
    document.getElementById(
        "system-restart"
    );


if (restartButton) {

    restartButton.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "Are you sure you want to restart the PC?"
                );

            if (confirmed) {

                sendSystemCommand(
                    "restart"
                );

            }

        }
    );

}


// ==========================================
// SHUTDOWN
// ==========================================

const shutdownButton =
    document.getElementById(
        "system-shutdown"
    );


if (shutdownButton) {

    shutdownButton.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "⚠️ Are you sure you want to shut down the PC?"
                );

            if (confirmed) {

                sendSystemCommand(
                    "shutdown"
                );

            }

        }
    );

}


// ==========================================
// SHOW DESKTOP
// ==========================================

const showDesktopButton =
    document.getElementById(
        "system-show-desktop"
    );


if (showDesktopButton) {

    showDesktopButton.addEventListener(
        "click",
        function() {

            sendSystemCommand(
                "show-desktop"
            );

        }
    );

}


// ==========================================
// MINIMIZE WINDOWS
// ==========================================

const minimizeButton =
    document.getElementById(
        "system-minimize"
    );


if (minimizeButton) {

    minimizeButton.addEventListener(
        "click",
        function() {

            sendSystemCommand(
                "minimize"
            );

        }
    );

}