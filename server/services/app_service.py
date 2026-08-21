import subprocess


class AppService:

    # ==========================================
    # APPLICATION PATHS
    # ==========================================

    APPLICATIONS = {

        "notepad": [
            "notepad.exe"
        ],

        "calculator": [
            "calc.exe"
        ],

        "explorer": [
            "explorer.exe"
        ],

        "chrome": [
            r"C:\Program Files\Google\Chrome\Application\chrome.exe"
        ],

        "vscode": [
            r"C:\Users\HP\AppData\Local\Programs\Microsoft VS Code\Code.exe"
        ]

    }


    # ==========================================
    # PROCESS NAMES
    # ==========================================

    PROCESS_NAMES = {

        "notepad": "notepad.exe",

        "calculator": "CalculatorApp.exe",

        "explorer": "explorer.exe",

        "chrome": "chrome.exe",

        "vscode": "Code.exe"

    }


    # ==========================================
    # OPEN APPLICATION
    # ==========================================

    @staticmethod
    def launch(app_name):

        app_name = app_name.lower().strip()


        if app_name not in AppService.APPLICATIONS:

            raise ValueError(
                "Application is not available"
            )


        command = AppService.APPLICATIONS[app_name]


        print(
            "Launching:",
            app_name
        )


        subprocess.Popen(
            command,
            shell=False
        )


        return True


    # ==========================================
    # CLOSE APPLICATION
    # ==========================================

    @staticmethod
    def close(app_name):

        app_name = app_name.lower().strip()


        if app_name not in AppService.PROCESS_NAMES:

            raise ValueError(
                "Application is not available"
            )


        process_name = \
            AppService.PROCESS_NAMES[app_name]


        print(
            "Closing:",
            process_name
        )


        result = subprocess.run(
            [
                "taskkill",
                "/IM",
                process_name,
                "/F"
            ],
            capture_output=True,
            text=True
        )


        if result.returncode != 0:

            raise ValueError(
                app_name.capitalize() +
                " is not running"
            )


        return True


    # ==========================================
    # CHECK IF APPLICATION IS RUNNING
    # ==========================================

    @staticmethod
    def is_running(app_name):

        app_name = app_name.lower().strip()


        if app_name not in AppService.PROCESS_NAMES:

            return False


        process_name = \
            AppService.PROCESS_NAMES[app_name]


        result = subprocess.run(
            [
                "tasklist",
                "/FI",
                f"IMAGENAME eq {process_name}"
            ],
            capture_output=True,
            text=True
        )


        return process_name.lower() in \
            result.stdout.lower()


    # ==========================================
    # GET APPLICATION STATUS
    # ==========================================

    @staticmethod
    def get_status():

        status = {}


        for app_name in AppService.APPLICATIONS:

            status[app_name] = \
                AppService.is_running(app_name)


        return status