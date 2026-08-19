// ==========================================
// MEDIA REMOTE
// ==========================================


// ==========================================
// SEND MEDIA COMMAND
// ==========================================

async function sendMediaCommand(command) {

    try {

        const response = await fetch(
            `/api/media/${command}`,
            {
                method: "POST"
            }
        );

        const data = await response.json();

        console.log(
            "Media command:",
            command,
            data
        );

    } catch (error) {

        console.error(
            "Media command error:",
            error
        );

    }

}


// ==========================================
// PLAY / PAUSE
// ==========================================

const playPauseButton =
    document.getElementById("media-play-pause");


if (playPauseButton) {

    playPauseButton.addEventListener(
        "click",
        function() {

            sendMediaCommand("play-pause");

        }
    );

}


// ==========================================
// PREVIOUS
// ==========================================

const previousButton =
    document.getElementById("media-previous");


if (previousButton) {

    previousButton.addEventListener(
        "click",
        function() {

            sendMediaCommand("previous");

        }
    );

}


// ==========================================
// NEXT
// ==========================================

const nextButton =
    document.getElementById("media-next");


if (nextButton) {

    nextButton.addEventListener(
        "click",
        function() {

            sendMediaCommand("next");

        }
    );

}


// ==========================================
// VOLUME UP
// ==========================================

const volumeUpButton =
    document.getElementById("volume-up");


if (volumeUpButton) {

    volumeUpButton.addEventListener(
        "click",
        function() {

            sendMediaCommand("volume-up");

        }
    );

}


// ==========================================
// VOLUME DOWN
// ==========================================

const volumeDownButton =
    document.getElementById("volume-down");


if (volumeDownButton) {

    volumeDownButton.addEventListener(
        "click",
        function() {

            sendMediaCommand("volume-down");

        }
    );

}


// ==========================================
// MUTE
// ==========================================

const muteButton =
    document.getElementById("volume-mute");


if (muteButton) {

    muteButton.addEventListener(
        "click",
        function() {

            sendMediaCommand("mute");

        }
    );

}