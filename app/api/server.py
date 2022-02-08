from flask import Flask, request

app = Flask(__name__)

@app.route("/test", methods=["GET"])
def members():
    return {"members":["memberone", "membertwo", "memberthree"]}

@app.route("/reqsolar", methods=["POST"])
def reqsolar():
    reqData = request.get_json()
    reqTitle = reqData["reqTitle"]
    reqText = reqData["reqText"]
    return {
        "title": reqTitle,
        "text" : reqText
    }
    
if __name__ == "__main__":
    app.run(debug=True)