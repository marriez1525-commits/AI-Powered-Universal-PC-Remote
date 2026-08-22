from flask import Blueprint, jsonify

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
# MINIMIZE
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

@system_bp.route("/brightness-up", methods=["POST"])
def brightness_up():
    try:
        SystemService.brightness_up()
        return jsonify({
            "success": True,
            "action": "brightness-up"
        })
    except Exception as error:
        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


@system_bp.route("/brightness-down", methods=["POST"])
def brightness_down():
    try:
        SystemService.brightness_down()
        return jsonify({
            "success": True,
            "action": "brightness-down"
        })
    except Exception as error:
        return jsonify({
            "success": False,
            "error": str(error)
        }), 500
# ==========================================
# BRIGHTNESS DOWN
# ==========================================

@system_bp.route("/brightness-down", methods=["POST"])
def brightness_down():

    try:

        SystemService.brightness_down()

        return jsonify({
            "success": True,
            "action": "brightness-down"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# BRIGHTNESS UP
# ==========================================

@system_bp.route("/brightness-up", methods=["POST"])
def brightness_up():

    try:

        SystemService.brightness_up()

        return jsonify({
            "success": True,
            "action": "brightness-up"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500