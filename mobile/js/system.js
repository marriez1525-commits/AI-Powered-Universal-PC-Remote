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
// LOCK
// ==========================================

const lockButton =
    document.getElementById("system-lock");

if (lockButton) {

    lockButton.addEventListener(
        "click",
        function() {

            sendSystemCommand("lock");

        }
    );

}


// ==========================================
// SLEEP
// ==========================================

const sleepButton =
    document.getElementById("system-sleep");

if (sleepButton) {

    sleepButton.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "Put your PC to sleep?"
                );

            if (confirmed) {

                sendSystemCommand("sleep");

            }

        }
    );

}


// ==========================================
// RESTART
// ==========================================

const restartButton =
    document.getElementById("system-restart");

if (restartButton) {

    restartButton.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "Are you sure you want to restart the PC?"
                );

            if (confirmed) {

                sendSystemCommand("restart");

            }

        }
    );

}


// ==========================================
// SHUTDOWN
// ==========================================

const shutdownButton =
    document.getElementById("system-shutdown");

if (shutdownButton) {

    shutdownButton.addEventListener(
        "click",
        function() {

            const confirmed =
                confirm(
                    "⚠️ Are you sure you want to shut down the PC?"
                );

            if (confirmed) {

                sendSystemCommand("shutdown");

            }

        }
    );

}


// ==========================================
// SHOW DESKTOP
// ==========================================

const showDesktopButton =
    document.getElementById("system-show-desktop");

if (showDesktopButton) {

    showDesktopButton.addEventListener(
        "click",
        function() {

            sendSystemCommand("show-desktop");

        }
    );

}


// ==========================================
// MINIMIZE WINDOWS
// ==========================================

const minimizeButton =
    document.getElementById("system-minimize");

if (minimizeButton) {

    minimizeButton.addEventListener(
        "click",
        function() {

            sendSystemCommand("minimize");

        }
    );

}