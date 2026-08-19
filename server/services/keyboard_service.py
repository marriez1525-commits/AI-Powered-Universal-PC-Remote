import pyautogui


class KeyboardService:

    # ==========================================
    # TYPE TEXT
    # ==========================================

    @staticmethod
    def type_text(text):

        if not text:
            return

        pyautogui.write(
            text,
            interval=0.01
        )


    # ==========================================
    # PRESS KEY
    # ==========================================

    @staticmethod
    def press_key(key):

        pyautogui.press(key)


    # ==========================================
    # HOTKEY
    # ==========================================

    @staticmethod
    def hotkey(keys):

        if not keys:
            return

        pyautogui.hotkey(*keys)