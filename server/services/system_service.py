import os
import subprocess


class SystemService:

    @staticmethod
    def lock_pc():
        os.system("rundll32.exe user32.dll,LockWorkStation")

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

    @staticmethod
    def restart_pc():
        os.system("shutdown /r /t 5")

    @staticmethod
    def shutdown_pc():
        os.system("shutdown /s /t 5")

    @staticmethod
    def show_desktop():
        # Win + D
        import pyautogui
        pyautogui.hotkey("win", "d")

    @staticmethod
    def minimize_windows():
        # Win + M
        import pyautogui
        pyautogui.hotkey("win", "m")