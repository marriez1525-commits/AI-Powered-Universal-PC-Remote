import os
import subprocess


class SystemService:

    # ==========================================
    # LOCK PC
    # ==========================================

    @staticmethod
    def lock_pc():

        os.system(
            "rundll32.exe user32.dll,LockWorkStation"
        )


    # ==========================================
    # SLEEP PC
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
    # RESTART PC
    # ==========================================

    @staticmethod
    def restart_pc():

        os.system(
            "shutdown /r /t 5"
        )


    # ==========================================
    # SHUTDOWN PC
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

        # Win + D
        import pyautogui

        pyautogui.hotkey(
            "win",
            "d"
        )


    # ==========================================
    # MINIMIZE WINDOWS
    # ==========================================

    @staticmethod
    def minimize_windows():

        # Win + M
        import pyautogui

        pyautogui.hotkey(
            "win",
            "m"
        )


    # ==========================================
    # SET BRIGHTNESS
    # ==========================================

    @staticmethod
    def set_brightness(value):

        # Make sure brightness stays between 0 and 100
        value = max(0, min(100, int(value)))

        powershell_command = f"""
        $brightness = {value}

        $monitors = Get-WmiObject `
            -Namespace root/WMI `
            -Class WmiMonitorBrightnessMethods

        foreach ($monitor in $monitors) {{
            $monitor.WmiSetBrightness(1, $brightness)
        }}
        """

        subprocess.run(
            [
                "powershell",
                "-NoProfile",
                "-ExecutionPolicy",
                "Bypass",
                "-Command",
                powershell_command
            ],
            capture_output=True,
            text=True
        )