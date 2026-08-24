# PCPilot — Universal PC Remote

<p align="center">
  <b>A web-based remote control system for Windows PCs</b>
  <br>
  Control your computer's mouse, keyboard, media, system functions, applications, and display brightness directly from a smartphone.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Windows-Supported-0078D4?style=for-the-badge&logo=windows&logoColor=white">
</p>

---

## Overview

**PCPilot** is a local-network-based universal remote control application that allows a smartphone to control a Windows PC through a responsive web interface.

The application runs a Flask server on the PC and exposes a set of REST API endpoints. The smartphone communicates with these endpoints over the same Wi-Fi network, while the Python backend translates the received commands into Windows operations.

PCPilot combines several common PC controls into a single interface:

- Mouse and touchpad control
- Keyboard input
- Media playback and volume
- Windows system controls
- Display brightness
- Application launching
- Application monitoring and closing
- Connection monitoring

The project is designed with a modular architecture so individual features can be developed and maintained independently.

---

## Features

### Mouse & Touchpad

Use the smartphone as a wireless touchpad.

- Cursor movement
- Left click
- Right click
- Double click
- Touch-friendly controls

### Keyboard

Control the PC keyboard from the smartphone.

- Text input
- Enter
- Escape
- Tab
- Backspace
- Delete
- Arrow keys
- Common keyboard shortcuts

Supported shortcuts include:

```text
CTRL + C
CTRL + V
CTRL + A