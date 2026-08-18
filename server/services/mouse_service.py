import pyautogui


class MouseService:

    @staticmethod
    def move(dx, dy):
        pyautogui.moveRel(dx, dy, duration=0)

    @staticmethod
    def left_click():
        pyautogui.click()

    @staticmethod
    def right_click():
        pyautogui.rightClick()

    @staticmethod
    def double_click():
        pyautogui.doubleClick()

    @staticmethod
    def scroll(amount):
        pyautogui.scroll(amount)