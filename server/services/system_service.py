import os
import subprocess


class SystemService:

    # ==========================================
    # LOCK
    # ==========================================

    @staticmethod
    def lock_pc():

        os.system(
            "rundll32.exe user32.dll,LockWorkStation"
        )


    # ==========================================
    # SLEEP
    # ==========================================

    @staticmethod
    def sleep_pc():

        subprocess.run(
            [
                "powershell",
                "-Command",
                "Start-Sleep -Milliseconds 500; "
                "Add-Type -AssemblyName System.Windows.Forms; "
                "[System.Windows.Forms.Application]::SetSuspendState("
                "'Suspend', $false, $false)"
            ],
            shell=True
        )


    # ==========================================
    # RESTART
    # ==========================================

    @staticmethod
    def restart_pc():

        os.system(
            "shutdown /r /t 5"
        )


    # ==========================================
    # SHUTDOWN
    # ==========================================

    @staticmethod
    def shutdown_pc():

        os.system(
            "shutdown /s /t 5"
        )


    # ==========================================
    # SHOW DESKTOP
    # ==========================================

    @staticmethod
    def show_desktop():

        import pyautogui

        # Win + D
        pyautogui.hotkey(
            "win",
            "d"
        )


    # ==========================================
    # MINIMIZE WINDOWS
    # ==========================================

    @staticmethod
    def minimize_windows():

        import pyautogui

        # Win + M
        pyautogui.hotkey(
            "win",
            "m"
        )


    # ==========================================
    # BRIGHTNESS DOWN
    # ==========================================

    @staticmethod
    def brightness_down():

        powershell_command = """
        $brightness = (Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightness).CurrentBrightness
        $newBrightness = [Math]::Max(0, $brightness - 10)

        (Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightnessMethods).WmiSetBrightness(1, $newBrightness)
        """

        subprocess.run(
            [
                "powershell",
                "-Command",
                powershell_command
            ],
            capture_output=True,
            text=True
        )


    # ==========================================
    # BRIGHTNESS UP
    # ==========================================

    @staticmethod
    def brightness_up():

        powershell_command = """
        $brightness = (Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightness).CurrentBrightness
        $newBrightness = [Math]::Min(100, $brightness + 10)

        (Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightnessMethods).WmiSetBrightness(1, $newBrightness)
        """

        subprocess.run(
            [
                "powershell",
                "-Command",
                powershell_command
            ],
            capture_output=True,
            text=True
        )