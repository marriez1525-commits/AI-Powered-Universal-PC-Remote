import subprocess


class AppService:

    # Change these paths if an application is installed
    # somewhere different on your PC.

    APPLICATIONS = {

        "chrome": [
            r"C:\Program Files\Google\Chrome\Application\chrome.exe"
        ],

        "vscode": [
            r"C:\Users\%USERNAME%\AppData\Local\Programs\Microsoft VS Code\Code.exe"
        ],

        "notepad": [
            "notepad.exe"
        ],

        "calculator": [
            "calc.exe"
        ],

        "explorer": [
            "explorer.exe"
        ],

    }


    @staticmethod
    def launch(app_name):

        app_name = app_name.lower().strip()

        if app_name not in AppService.APPLICATIONS:

            raise ValueError(
                "Application is not available"
            )

        command = AppService.APPLICATIONS[app_name]

        subprocess.Popen(
            command,
            shell=False
        )

        return True