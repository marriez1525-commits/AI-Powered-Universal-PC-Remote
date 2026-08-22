from flask import Blueprint, jsonify, request

from services.system_service import SystemService


system_bp = Blueprint(
    "system",
    __name__,
    url_prefix="/api/system"
)


# ==========================================
# LOCK
# ==========================================

@system_bp.route("/lock", methods=["POST"])
def lock_pc():

    try:

        SystemService.lock_pc()

        return jsonify({
            "success": True,
            "action": "lock"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# SLEEP
# ==========================================

@system_bp.route("/sleep", methods=["POST"])
def sleep_pc():

    try:

        SystemService.sleep_pc()

        return jsonify({
            "success": True,
            "action": "sleep"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# RESTART
# ==========================================

@system_bp.route("/restart", methods=["POST"])
def restart_pc():

    try:

        SystemService.restart_pc()

        return jsonify({
            "success": True,
            "action": "restart"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# SHUTDOWN
# ==========================================

@system_bp.route("/shutdown", methods=["POST"])
def shutdown_pc():

    try:

        SystemService.shutdown_pc()

        return jsonify({
            "success": True,
            "action": "shutdown"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# SHOW DESKTOP
# ==========================================

@system_bp.route("/show-desktop", methods=["POST"])
def show_desktop():

    try:

        SystemService.show_desktop()

        return jsonify({
            "success": True,
            "action": "show_desktop"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# MINIMIZE WINDOWS
# ==========================================

@system_bp.route("/minimize", methods=["POST"])
def minimize_windows():

    try:

        SystemService.minimize_windows()

        return jsonify({
            "success": True,
            "action": "minimize"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# BRIGHTNESS
# ==========================================

@system_bp.route("/brightness", methods=["POST"])
def set_brightness():

    try:

        data = request.get_json()

        if not data or "value" not in data:
            return jsonify({
                "success": False,
                "error": "Brightness value is required"
            }), 400

        value = int(data["value"])

        # Keep brightness between 0 and 100
        value = max(0, min(100, value))

        SystemService.set_brightness(value)

        return jsonify({
            "success": True,
            "action": "brightness",
            "value": value
        })

    except ValueError:

        return jsonify({
            "success": False,
            "error": "Brightness must be a number"
        }), 400

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500