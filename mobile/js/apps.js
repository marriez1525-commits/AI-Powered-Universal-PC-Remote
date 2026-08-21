// ==========================================
// PCPILOT APPLICATION LAUNCHER
// ==========================================


async function launchApplication(appName) {

    console.log(
        "Launching:",
        appName
    );


    try {

        const response =
            await fetch(
                "/api/apps/launch",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        app: appName
                    })
                }
            );


        const data =
            await response.json();


        console.log(
            "Server response:",
            data
        );


        if (!data.success) {

            alert(
                "Could not launch " +
                appName +
                "\n\n" +
                data.error
            );

            return;
        }


        console.log(
            appName +
            " launched successfully"
        );

    }
    catch (error) {

        console.error(
            "Application launch error:",
            error
        );


        alert(
            "Could not connect to PCPilot server."
        );

    }

}


// ==========================================
// APPLICATION BUTTONS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ==================================
        // NOTEPAD
        // ==================================

        const notepad =
            document.getElementById(
                "app-notepad"
            );


        if (notepad) {

            notepad.addEventListener(
                "click",
                function () {

                    launchApplication(
                        "notepad"
                    );

                }
            );

        }


        // ==================================
        // CALCULATOR
        // ==================================

        const calculator =
            document.getElementById(
                "app-calculator"
            );


        if (calculator) {

            calculator.addEventListener(
                "click",
                function () {

                    launchApplication(
                        "calculator"
                    );

                }
            );

        }


        // ==================================
        // FILE EXPLORER
        // ==================================

        const explorer =
            document.getElementById(
                "app-explorer"
            );


        if (explorer) {

            explorer.addEventListener(
                "click",
                function () {

                    launchApplication(
                        "explorer"
                    );

                }
            );

        }


        // ==================================
        // CHROME
        // ==================================

        const chrome =
            document.getElementById(
                "app-chrome"
            );


        if (chrome) {

            chrome.addEventListener(
                "click",
                function () {

                    launchApplication(
                        "chrome"
                    );

                }
            );

        }


        // ==================================
        // VS CODE
        // ==================================

        const vscode =
            document.getElementById(
                "app-vscode"
            );


        if (vscode) {

            vscode.addEventListener(
                "click",
                function () {

                    launchApplication(
                        "vscode"
                    );

                }
            );

        }


        console.log(
            "PCPilot Application Launcher Ready"
        );

    }
);