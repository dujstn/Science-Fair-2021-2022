from flask import Flask, request

app = Flask(__name__)

@app.route("/test", methods=["GET"])
def members():
    return {"members":["memberone", "membertwo", "memberthree"]}

@app.route("/reqsolar", methods=["POST"])
def reqsolar():
    data = request.get_json()
    lat = data["lat"]
    long = data["long"]
    size = data["size"]
    return {
        "lat": lat,
        "long" : long,
        "size" : size
    }
    
if __name__ == "__main__":
    app.run(debug=True)