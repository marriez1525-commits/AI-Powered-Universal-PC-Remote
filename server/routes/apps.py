from flask import Blueprint, request, jsonify

from services.app_service import AppService


apps_bp = Blueprint(
    "apps",
    __name__,
    url_prefix="/api/apps"
)


@apps_bp.route("/launch", methods=["POST"])
def launch_app():

    data = request.get_json(silent=True) or {}

    app_name = data.get("app")

    if not app_name:

        return jsonify({
            "success": False,
            "error": "Application name is required"
        }), 400


    try:

        AppService.launch(app_name)

        return jsonify({
            "success": True,
            "app": app_name
        })


    except ValueError as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 400


    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500