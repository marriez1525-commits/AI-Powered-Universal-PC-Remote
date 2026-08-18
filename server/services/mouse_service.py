import pyautogui


class MouseService:

    @staticmethod
    def move(dx, dy):
        """Move the PC mouse relatively."""
        pyautogui.moveRel(dx, dy, duration=0)

    @staticmethod
    def left_click():
        """Perform a left mouse click."""
        pyautogui.click()

    @staticmethod
    def right_click():
        """Perform a right mouse click."""
        pyautogui.rightClick()

    @staticmethod
    def double_click():
        """Perform a double left click."""
        pyautogui.doubleClick()

    @staticmethod
    def scroll(amount):
        """Scroll vertically."""
        pyautogui.scroll(amount)