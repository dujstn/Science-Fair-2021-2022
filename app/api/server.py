from flask import Flask, request
import requests

app = Flask(__name__)

@app.route("/test", methods=["GET"])
def members():
    return {"members":["memberone", "membertwo", "memberthree"]}

@app.route("/reqsolar", methods=["POST"])
def reqsolar():
    data = request.get_json()
    lat = int(data["lat"])
    longi = int(data["long"])
    size = data["size"]


    url = "https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key={}&lat={}&lon={}".format(
        "7HM9Fa883Owuw2ejRANXaQumqJmUB0lzMDoafC3u",
        lat,
        longi
    )
    response = requests.get(f"{url}").json()
    version = response["version"]
    dni = response["outputs"]["avg_dni"]["annual"]

    return {
        "lat": lat,
        "long" : longi,
        "size" : size,
        "apiversion": version,
        "sampleDNI": dni
    }
    
if __name__ == "__main__":
    app.run(debug=True)