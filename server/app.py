from flask import Flask, send_from_directory
import socket

app = Flask(__name__)


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
    return send_from_directory("../mobile", "index.html")


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

    app.run(host="0.0.0.0", port=5000, debug=True)