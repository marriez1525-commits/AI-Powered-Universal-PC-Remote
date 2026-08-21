// ==========================================
// PCPILOT APPLICATION MANAGER
// ==========================================


// ==========================================
// LAUNCH APPLICATION
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
            "Launch response:",
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


        updateApplicationStatus();

    }
    catch (error) {

        console.error(
            "Launch error:",
            error
        );


        alert(
            "Could not connect to PCPilot server."
        );

    }

}



// ==========================================
// CLOSE APPLICATION
// ==========================================

async function closeApplication(appName) {

    const confirmed =
        confirm(
            "Are you sure you want to close " +
            appName +
            "?"
        );


    if (!confirmed) {

        return;

    }


    console.log(
        "Closing:",
        appName
    );


    try {

        const response =
            await fetch(
                "/api/apps/close",
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
            "Close response:",
            data
        );


        if (!data.success) {

            alert(
                data.error
            );

            return;
        }


        updateApplicationStatus();

    }
    catch (error) {

        console.error(
            "Close error:",
            error
        );


        alert(
            "Could not connect to PCPilot server."
        );

    }

}



// ==========================================
// GET APPLICATION STATUS
// ==========================================

async function updateApplicationStatus() {

    try {

        const response =
            await fetch(
                "/api/apps/status"
            );


        const data =
            await response.json();


        if (!data.success) {

            return;

        }


        const applications =
            data.applications;


        Object.keys(applications)
            .forEach(
                function(appName) {

                    const statusElement =
                        document.getElementById(
                            "status-" + appName
                        );


                    if (!statusElement) {

                        return;

                    }


                    if (
                        applications[appName]
                    ) {

                        statusElement.textContent =
                            "🟢 Running";

                        statusElement.className =
                            "app-status running";

                    }
                    else {

                        statusElement.textContent =
                            "⚪ Not Running";

                        statusElement.className =
                            "app-status stopped";

                    }

                }
            );

    }
    catch (error) {

        console.error(
            "Status error:",
            error
        );

    }

}



// ==========================================
// CONNECT BUTTONS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        // NOTEPAD

        const notepad =
            document.getElementById(
                "app-notepad"
            );


        if (notepad) {

            notepad.addEventListener(
                "click",
                function() {

                    launchApplication(
                        "notepad"
                    );

                }
            );

        }



        // CALCULATOR

        const calculator =
            document.getElementById(
                "app-calculator"
            );


        if (calculator) {

            calculator.addEventListener(
                "click",
                function() {

                    launchApplication(
                        "calculator"
                    );

                }
            );

        }



        // EXPLORER

        const explorer =
            document.getElementById(
                "app-explorer"
            );


        if (explorer) {

            explorer.addEventListener(
                "click",
                function() {

                    launchApplication(
                        "explorer"
                    );

                }
            );

        }



        // CHROME

        const chrome =
            document.getElementById(
                "app-chrome"
            );


        if (chrome) {

            chrome.addEventListener(
                "click",
                function() {

                    launchApplication(
                        "chrome"
                    );

                }
            );

        }



        // VS CODE

        const vscode =
            document.getElementById(
                "app-vscode"
            );


        if (vscode) {

            vscode.addEventListener(
                "click",
                function() {

                    launchApplication(
                        "vscode"
                    );

                }
            );

        }



        // ==================================
        // CLOSE BUTTONS
        // ==================================


        const closeButton =
            document.getElementById(
                "close-app"
            );


        const appSelector =
            document.getElementById(
                "close-app-selector"
            );


        if (closeButton && appSelector) {

            closeButton.addEventListener(
                "click",
                function() {

                    const appName =
                        appSelector.value;


                    if (!appName) {

                        return;

                    }


                    closeApplication(
                        appName
                    );

                }
            );

        }



        // ==================================
        // REFRESH STATUS
        // ==================================

        const refreshButton =
            document.getElementById(
                "refresh-apps"
            );


        if (refreshButton) {

            refreshButton.addEventListener(
                "click",
                updateApplicationStatus
            );

        }



        // Initial status

        updateApplicationStatus();


        // Automatic status refresh

        setInterval(
            updateApplicationStatus,
            5000
        );


        console.log(
            "PCPilot Application Manager Ready"
        );

    }
);