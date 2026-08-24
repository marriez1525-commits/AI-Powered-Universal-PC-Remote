# 🚀 PCPilot – Universal PC Remote

PCPilot is a web-based universal PC remote control application that allows users to control their Windows PC directly from a mobile phone.

The application uses a Flask backend running on the PC and a mobile-friendly web interface that communicates with the PC over the same local Wi-Fi network.

---

## ✨ Features

### 🖱️ Mouse / Touchpad Control
- Move the PC cursor using a mobile touchpad
- Left click
- Right click
- Double click
- Real-time cursor movement

### ⌨️ Keyboard Control
- Type text from your mobile phone
- Send text directly to the PC
- Special keys:
  - ESC
  - TAB
  - ENTER
  - BACKSPACE
  - DELETE
- Arrow keys:
  - UP
  - DOWN
  - LEFT
  - RIGHT
- Keyboard shortcuts:
  - CTRL + C
  - CTRL + V
  - CTRL + A

### 🎵 Media Remote
- Play / Pause
- Previous track
- Next track
- Volume Up
- Volume Down
- Mute / Unmute

### 🖥️ System Control
- Lock PC
- Put PC to Sleep
- Show Desktop
- Minimize Windows
- Restart PC
- Shutdown PC

### 💡 Brightness Control
- Increase screen brightness
- Decrease screen brightness
- Brightness control directly from the mobile interface

### 🚀 Application Launcher
Launch applications installed on the PC directly from the phone:

- Google Chrome
- Visual Studio Code
- Notepad
- Calculator
- File Explorer

### 🛑 Application Manager
- Check whether supported applications are running
- Refresh application status
- Close applications remotely

### 📡 Connection Status
- Displays whether the mobile device is connected to the PC
- Automatically checks the server status
- Shows the PC connection status on the mobile interface

---

## 🛠️ Technologies Used

### Backend
- Python
- Flask
- PyAutoGUI
- WMI
- PyWin32 / Python COM support
- Windows system commands

### Frontend
- HTML5
- CSS3
- JavaScript
- Fetch API
- Responsive Mobile UI

### Communication
- REST API
- Local Wi-Fi network
- HTTP requests

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