// ==========================================
// KEYBOARD REMOTE
// ==========================================


// ==========================================
// TYPE TEXT
// ==========================================

async function typeText(text) {

    if (!text) {
        return;
    }

    try {

        await fetch(
            "/api/keyboard/type",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    text: text
                })
            }
        );

    } catch (error) {

        console.error(
            "Keyboard typing error:",
            error
        );

    }
}


// ==========================================
// PRESS KEY
// ==========================================

async function pressKey(key) {

    try {

        await fetch(
            "/api/keyboard/press",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    key: key
                })
            }
        );

    } catch (error) {

        console.error(
            "Key press error:",
            error
        );

    }
}


// ==========================================
// HOTKEY
// ==========================================

async function sendHotkey(keys) {

    try {

        await fetch(
            "/api/keyboard/hotkey",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    keys: keys
                })
            }
        );

    } catch (error) {

        console.error(
            "Hotkey error:",
            error
        );

    }
}


// ==========================================
// TEXT INPUT
// ==========================================

const keyboardInput =
    document.getElementById("keyboard-input");


const keyboardSend =
    document.getElementById("keyboard-send");


if (keyboardSend) {

    keyboardSend.addEventListener(
        "click",
        function() {

            const text =
                keyboardInput.value;

            typeText(text);

            keyboardInput.value = "";

        }
    );

}


// ==========================================
// ENTER
// ==========================================

const enterButton =
    document.getElementById("key-enter");


if (enterButton) {

    enterButton.addEventListener(
        "click",
        function() {

            pressKey("enter");

        }
    );

}


// ==========================================
// BACKSPACE
// ==========================================

const backspaceButton =
    document.getElementById("key-backspace");


if (backspaceButton) {

    backspaceButton.addEventListener(
        "click",
        function() {

            pressKey("backspace");

        }
    );

}


// ==========================================
// ESC
// ==========================================

const escButton =
    document.getElementById("key-esc");


if (escButton) {

    escButton.addEventListener(
        "click",
        function() {

            pressKey("esc");

        }
    );

}


// ==========================================
// TAB
// ==========================================

const tabButton =
    document.getElementById("key-tab");


if (tabButton) {

    tabButton.addEventListener(
        "click",
        function() {

            pressKey("tab");

        }
    );

}


// ==========================================
// DELETE
// ==========================================

const deleteButton =
    document.getElementById("key-delete");


if (deleteButton) {

    deleteButton.addEventListener(
        "click",
        function() {

            pressKey("delete");

        }
    );

}


// ==========================================
// ARROW KEYS
// ==========================================

const arrowKeys = {

    "key-up": "up",
    "key-down": "down",
    "key-left": "left",
    "key-right": "right"

};


Object.entries(arrowKeys).forEach(
    function([buttonId, key]) {

        const button =
            document.getElementById(buttonId);

        if (button) {

            button.addEventListener(
                "click",
                function() {

                    pressKey(key);

                }
            );

        }

    }
);


// ==========================================
// CTRL + C
// ==========================================

const copyButton =
    document.getElementById("hotkey-copy");


if (copyButton) {

    copyButton.addEventListener(
        "click",
        function() {

            sendHotkey([
                "ctrl",
                "c"
            ]);

        }
    );

}


// ==========================================
// CTRL + V
// ==========================================

const pasteButton =
    document.getElementById("hotkey-paste");


if (pasteButton) {

    pasteButton.addEventListener(
        "click",
        function() {

            sendHotkey([
                "ctrl",
                "v"
            ]);

        }
    );

}


// ==========================================
// CTRL + A
// ==========================================

const selectAllButton =
    document.getElementById("hotkey-select-all");


if (selectAllButton) {

    selectAllButton.addEventListener(
        "click",
        function() {

            sendHotkey([
                "ctrl",
                "a"
            ]);

        }
    );

}