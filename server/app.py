from flask import Flask, send_from_directory
import socket
import os

from routes.mouse import mouse_bp

# Path to the mobile folder
MOBILE_FOLDER = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "mobile")
)

app = Flask(
    __name__,
    static_folder=MOBILE_FOLDER,
    static_url_path=""
)

app.register_blueprint(mouse_bp)
def get_local_ip():
    """Get the laptop's local network IP address."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip

    except Exception:
        return "127.0.0.1"


@app.route("/")
def home():
    return send_from_directory(MOBILE_FOLDER, "index.html")


@app.route("/api/status")
def status():
    return {
        "status": "connected",
        "message": "PCPilot server is running"
    }


if __name__ == "__main__":
    ip = get_local_ip()

    print("\n===================================")
    print("       PCPilot Server Started")
    print("===================================")
    print(f"PC Address: http://{ip}:5000")
    print("Open this address on your phone.")
    print("===================================\n")

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )