import pyautogui


class MediaService:

    @staticmethod
    def play_pause():
        pyautogui.press("playpause")

    @staticmethod
    def next_track():
        pyautogui.press("nexttrack")

    @staticmethod
    def previous_track():
        pyautogui.press("prevtrack")

    @staticmethod
    def volume_up():
        pyautogui.press("volumeup")

    @staticmethod
    def volume_down():
        pyautogui.press("volumedown")

    @staticmethod
    def mute():
        pyautogui.press("volumemute")