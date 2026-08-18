from flask import Blueprint, request, jsonify

from server.services.mouse_service import MouseService


mouse_bp = Blueprint("mouse", __name__, url_prefix="/api/mouse")


@mouse_bp.route("/move", methods=["POST"])
def move_mouse():

    data = request.get_json(silent=True) or {}

    try:
        dx = float(data.get("dx", 0))
        dy = float(data.get("dy", 0))

        # Limit movement coming from the phone
        dx = max(-100, min(100, dx))
        dy = max(-100, min(100, dy))

        MouseService.move(dx, dy)

        return jsonify({
            "success": True
        })

    except (TypeError, ValueError):
        return jsonify({
            "success": False,
            "error": "Invalid mouse movement"
        }), 400


@mouse_bp.route("/click", methods=["POST"])
def left_click():

    MouseService.left_click()

    return jsonify({
        "success": True,
        "action": "left_click"
    })


@mouse_bp.route("/right-click", methods=["POST"])
def right_click():

    MouseService.right_click()

    return jsonify({
        "success": True,
        "action": "right_click"
    })


@mouse_bp.route("/double-click", methods=["POST"])
def double_click():

    MouseService.double_click()

    return jsonify({
        "success": True,
        "action": "double_click"
    })


@mouse_bp.route("/scroll", methods=["POST"])
def scroll():

    data = request.get_json(silent=True) or {}

    try:
        amount = int(data.get("amount", 0))

        amount = max(-10, min(10, amount))

        MouseService.scroll(amount)

        return jsonify({
            "success": True,
            "action": "scroll"
        })

    except (TypeError, ValueError):
        return jsonify({
            "success": False,
            "error": "Invalid scroll amount"
        }), 400