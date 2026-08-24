# 🚀 PCPilot — Universal PC Remote

<p align="center">
  <strong>Control your Windows PC directly from your smartphone.</strong>
</p>

<p align="center">
  A web-based PC remote control system built with Flask, JavaScript, and Python.
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-3.x-black?logo=flask)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Windows-0078D4?logo=windows)
![Status](https://img.shields.io/badge/Status-Completed-success)

</p>

---

## 📌 Overview

**PCPilot** is a mobile-based universal PC remote control application that allows users to operate their Windows computer directly from a smartphone.

The system runs a lightweight **Flask server on the PC** and provides a responsive web interface that can be accessed from any smartphone connected to the same local Wi-Fi network.

Instead of using multiple physical controls, PCPilot combines mouse, keyboard, media, system, brightness, and application controls into a single mobile interface.

---

## ✨ Key Features

### 🖱️ Touchpad & Mouse Control

Control the PC mouse directly from your smartphone.

- Real-time cursor movement
- Left click
- Right click
- Double click
- Mobile-friendly touchpad interface

---

### ⌨️ Keyboard Control

Use your smartphone as a wireless keyboard.

- Send text to the PC
- Enter
- Escape
- Tab
- Backspace
- Delete
- Arrow keys
- `CTRL + C`
- `CTRL + V`
- `CTRL + A`

---

### 🎵 Media Control

Control media playback directly from your phone.

- ▶️ Play / Pause
- ⏮️ Previous
- ⏭️ Next
- 🔊 Volume Up
- 🔉 Volume Down
- 🔇 Mute

---

### 🖥️ System Control

Perform common Windows system operations remotely.

- 🔒 Lock PC
- 🌙 Sleep
- 🖥️ Show Desktop
- 📉 Minimize Windows
- 🔄 Restart
- ⏻ Shutdown

---

### 💡 Brightness Control

Control the PC display brightness remotely.

- ☀️ Increase brightness
- 🌙 Decrease brightness

Brightness functionality is integrated into the system-control module.

---

### 🚀 Application Launcher

Launch frequently used applications directly from the smartphone.

Supported applications include:

- 🌐 Google Chrome
- 💻 Visual Studio Code
- 📝 Notepad
- 🧮 Calculator
- 📁 File Explorer

---

### 🛑 Application Manager

Monitor and manage supported applications.

- Check whether applications are running
- Refresh application status
- Close selected applications remotely

---

### 📡 Connection Monitoring

PCPilot continuously communicates with the Flask server to determine whether the PC is available.

The interface provides a visual connection status so the user can easily determine whether the remote is connected.

---

# 🏗️ System Architecture

PCPilot follows a simple client-server architecture.

```text
┌───────────────────────┐
│      📱 Smartphone    │
│                       │
│ HTML / CSS / JS       │
└───────────┬───────────┘
            │
            │ HTTP / REST API
            │
            ▼
┌───────────────────────┐
│    🌐 Flask Server    │
│                       │
│      Python Backend   │
└───────────┬───────────┘
            │
            ▼
┌─────────────────────────────────┐
│        Backend Services         │
│                                 │
│  Mouse      Keyboard            │
│  Media      System              │
│  Brightness Applications        │
└───────────┬─────────────────────┘
            │
            ▼
┌───────────────────────┐
│      💻 Windows PC    │
└───────────────────────┘