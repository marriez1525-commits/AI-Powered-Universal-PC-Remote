# 🚀 PCPilot – Universal PC Remote

PCPilot is a web-based universal PC remote control application that empowers users to control their Windows PC directly from a mobile device.

The system features a lightweight **Flask** server running on the host machine and a mobile-optimized web UI that communicates seamlessly across the local Wi-Fi network using modular REST APIs.

---

## ✨ Features

### 🖱️ Mouse & Touchpad Control
- **Touchpad Navigation:** Real-time cursor movement via mobile interface.
- **Click Actions:** Primary left-click, right-click, and double-click support.

### ⌨️ Keyboard Control & Shortcuts
- **Direct Typing:** Send full text strings directly to the target PC.
- **Special Keys:** Fast access to `ESC`, `TAB`, `ENTER`, `BACKSPACE`, and `DELETE`.
- **Navigation:** Full directional arrow key control (`UP`, `DOWN`, `LEFT`, `RIGHT`).
- **Shortcuts:** One-tap triggers for `CTRL+C`, `CTRL+V`, and `CTRL+A`.

### 🎵 Media Remote
- Play / Pause toggles.
- Next and Previous track navigation.
- Master Volume Up / Down controls.
- Instant Mute / Unmute toggles.

### 🖥️ System Management & Display
- Quick actions: **Lock PC**, **Sleep Mode**, **Show Desktop**, and **Minimize Windows**.
- Power controls: Remote **Restart** and **Shutdown**.
- **Screen Brightness:** Adjust display brightness dynamically from the mobile UI.

### 🚀 Application Management
- **One-Tap Launcher:** Instantly launch popular applications (Google Chrome, Visual Studio Code, Notepad, Calculator, File Explorer).
- **Process Monitor:** Check real-time running status of supported applications and terminate processes remotely.

### 📡 Network Connection Status
- Automatic server discovery and polling.
- Live connectivity status updates directly on the mobile dashboard.

---

## 🛠️ Tech Stack

* **Backend Framework:** Python, Flask
* **Automation & System Libraries:** PyAutoGUI, WMI, PyWin32 / Python COM Interop
* **Frontend:** HTML5, CSS3, Modern JavaScript (ES6+, Fetch API)
* **Architecture:** Modular RESTful Services, Local Wi-Fi Network Communication

---

## 📁 Project Structure

```text
AI-Powered Universal PC Remote/
│
├── server/
│   ├── app.py
│   │
│   ├── routes/
│   │   ├── mouse.py
│   │   ├── keyboard.py
│   │   ├── media.py
│   │   ├── system.py
│   │   └── apps.py
│   │
│   └── services/
│       ├── mouse_service.py
│       ├── keyboard_service.py
│       ├── media_service.py
│       ├── system_service.py
│       └── app_service.py
│
├── mobile/
│   ├── index.html
│   │
│   ├── style/
│   │   ├── style.css
│   │   ├── touchpad.css
│   │   ├── keyboard.css
│   │   ├── media.css
│   │   ├── system.css
│   │   └── apps.css
│   │
│   └── js/
│       ├── app.js
│       ├── touchpad.js
│       ├── keyboard.js
│       ├── media.js
│       ├── system.js
│       └── apps.js
│
└── README.md