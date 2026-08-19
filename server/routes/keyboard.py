from flask import Blueprint, request, jsonify

from services.keyboard_service import KeyboardService


keyboard_bp = Blueprint(
    "keyboard",
    __name__,
    url_prefix="/api/keyboard"
)


# ==========================================
# TYPE TEXT
# ==========================================

@keyboard_bp.route("/type", methods=["POST"])
def type_text():

    data = request.get_json(silent=True) or {}

    text = data.get("text", "")

    if not isinstance(text, str):

        return jsonify({
            "success": False,
            "error": "Invalid text"
        }), 400

    try:

        KeyboardService.type_text(text)

        return jsonify({
            "success": True,
            "action": "type"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# PRESS KEY
# ==========================================

@keyboard_bp.route("/press", methods=["POST"])
def press_key():

    data = request.get_json(silent=True) or {}

    key = data.get("key", "")

    if not isinstance(key, str) or not key:

        return jsonify({
            "success": False,
            "error": "Invalid key"
        }), 400

    try:

        KeyboardService.press_key(key)

        return jsonify({
            "success": True,
            "action": "press",
            "key": key
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


# ==========================================
# HOTKEY
# ==========================================

@keyboard_bp.route("/hotkey", methods=["POST"])
def hotkey():

    data = request.get_json(silent=True) or {}

    keys = data.get("keys", [])

    if not isinstance(keys, list) or not keys:

        return jsonify({
            "success": False,
            "error": "Invalid hotkey"
        }), 400

    try:

        KeyboardService.hotkey(keys)

        return jsonify({
            "success": True,
            "action": "hotkey"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500