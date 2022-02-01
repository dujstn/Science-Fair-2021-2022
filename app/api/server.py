import re
from flask import Flask, request

app = Flask(__name__)

@app.route("/test", methods=["GET"])
def members():
    return {"members":["memberone", "membertwo", "memberthree"]}

@app.route("/reqsolar", methods=["POST"])
def reqsolar():
    reqData = request.get_json()
    title = reqData["title"]
    title = title + "!!!"
    return {
        "title": title
    }
if __name__ == "__main__":
    app.run(debug=True)