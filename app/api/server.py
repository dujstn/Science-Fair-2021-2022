from flask import Flask, request
import requests

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


    url = "https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=DEMO_KEY&lat=40&lon=-105"
    response = requests.get(f"{url}").json()
    thing = response["outputs"]["avg_dni"]["annual"]

    return {
        "lat": lat,
        "long" : long,
        "size" : size,
        "apiversion": thing
    }
    
if __name__ == "__main__":
    app.run(debug=True)