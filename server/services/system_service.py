import os
import subprocess
import pyautogui
import wmi
import pythoncom


class SystemService:

    # ==========================================
    # LOCK
    # ==========================================

    @staticmethod
    def lock_pc():
        os.system("rundll32.exe user32.dll,LockWorkStation")


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
        os.system("shutdown /r /t 5")


    # ==========================================
    # SHUTDOWN
    # ==========================================

    @staticmethod
    def shutdown_pc():
        os.system("shutdown /s /t 5")


    # ==========================================
    # SHOW DESKTOP
    # ==========================================

    @staticmethod
    def show_desktop():
        pyautogui.hotkey("win", "d")


    # ==========================================
    # MINIMIZE WINDOWS
    # ==========================================

    @staticmethod
    def minimize_windows():
        pyautogui.hotkey("win", "m")


    # ==========================================
    # GET CURRENT BRIGHTNESS
    # ==========================================

    @staticmethod
    def get_brightness():

        pythoncom.CoInitialize()

        try:
            monitors = wmi.WMI(namespace="wmi")

            brightness = monitors.WmiMonitorBrightness()

            if brightness:
                current = brightness[0].CurrentBrightness

                print(f"Current brightness: {current}%")

                return current

            return None

        except Exception as error:
            print("Brightness read error:", error)
            raise

        finally:
            pythoncom.CoUninitialize()


    # ==========================================
    # SET BRIGHTNESS
    # ==========================================

    @staticmethod
    def set_brightness(value):

        value = max(0, min(100, int(value)))

        pythoncom.CoInitialize()

        try:
            monitors = wmi.WMI(namespace="wmi")

            methods = monitors.WmiMonitorBrightnessMethods()

            if not methods:
                raise Exception(
                    "Windows did not detect a controllable monitor."
                )

            for monitor in methods:

                monitor.WmiSetBrightness(
                    Timeout=1,
                    Brightness=value
                )

            print(f"Brightness set to {value}%")

            return value

        except Exception as error:
            print("Brightness set error:", error)
            raise

        finally:
            pythoncom.CoUninitialize()


    # ==========================================
    # BRIGHTNESS UP
    # ==========================================

    @staticmethod
    def brightness_up():

        current = SystemService.get_brightness()

        if current is None:
            raise Exception(
                "Unable to read current monitor brightness."
            )

        new_value = min(100, current + 10)

        return SystemService.set_brightness(new_value)


    # ==========================================
    # BRIGHTNESS DOWN
    # ==========================================

    @staticmethod
    def brightness_down():

        current = SystemService.get_brightness()

        if current is None:
            raise Exception(
                "Unable to read current monitor brightness."
            )

        new_value = max(0, current - 10)

        return SystemService.set_brightness(new_value)