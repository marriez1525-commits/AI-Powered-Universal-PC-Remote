from flask import Blueprint, jsonify

from services.media_service import MediaService


media_bp = Blueprint(
    "media",
    __name__,
    url_prefix="/api/media"
)


@media_bp.route("/play-pause", methods=["POST"])
def play_pause():

    try:

        MediaService.play_pause()

        return jsonify({
            "success": True,
            "action": "play_pause"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


@media_bp.route("/next", methods=["POST"])
def next_track():

    try:

        MediaService.next_track()

        return jsonify({
            "success": True,
            "action": "next"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


@media_bp.route("/previous", methods=["POST"])
def previous_track():

    try:

        MediaService.previous_track()

        return jsonify({
            "success": True,
            "action": "previous"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


@media_bp.route("/volume-up", methods=["POST"])
def volume_up():

    try:

        MediaService.volume_up()

        return jsonify({
            "success": True,
            "action": "volume_up"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


@media_bp.route("/volume-down", methods=["POST"])
def volume_down():

    try:

        MediaService.volume_down()

        return jsonify({
            "success": True,
            "action": "volume_down"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


@media_bp.route("/mute", methods=["POST"])
def mute():

    try:

        MediaService.mute()

        return jsonify({
            "success": True,
            "action": "mute"
        })

    except Exception as error:

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500