from flask import Flask, send_from_directory, jsonify
import socket
import os

from routes.mouse import mouse_bp


# ==========================================
# PATHS
# ==========================================

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MOBILE_FOLDER = os.path.join(BASE_DIR, "mobile")
CSS_FOLDER = os.path.join(MOBILE_FOLDER, "css")
JS_FOLDER = os.path.join(MOBILE_FOLDER, "js")


# ==========================================
# FLASK APP
# ==========================================

app = Flask(__name__)

app.register_blueprint(mouse_bp)


# ==========================================
# MOBILE FRONTEND
# ==========================================

@app.route("/")
def home():
    return send_from_directory(MOBILE_FOLDER, "index.html")


@app.route("/css/<path:filename>")
def css_files(filename):
    return send_from_directory(CSS_FOLDER, filename)


@app.route("/js/<path:filename>")
def js_files(filename):
    return send_from_directory(JS_FOLDER, filename)


# ==========================================
# CONNECTION STATUS
# ==========================================

@app.route("/api/status")
def status():
    return jsonify({
        "status": "connected",
        "message": "PCPilot server is running"
    })


# ==========================================
# GET LOCAL IP
# ==========================================

def get_local_ip():

    try:

        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

        s.connect(("8.8.8.8", 80))

        ip = s.getsockname()[0]

        s.close()

        return ip

    except Exception:

        return "127.0.0.1"


# ==========================================
# START SERVER
# ==========================================

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