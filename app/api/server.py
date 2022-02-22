from flask import Flask, request
import requests
import model
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route("/reqinso", methods=["POST"])
@cross_origin
def reqinso():
    data = request.get_json()
    lat = float(data["lat"])
    long = float(data["long"])
    size = float(data["size"])

    url = "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DNI&community=RE&longitude={}&latitude={}&format=JSON&start=2020&end=2020".format(
        long,
        lat
    )
    response = requests.get(f"{url}").json()
    dniList = []
    for key, value in (response["properties"]["parameter"]["ALLSKY_SFC_SW_DNI"].items()):
        dniList.append(value)
    dni = sum(dniList)/len(dniList)
    print(url)

    return {
        "lat": lat,
        "long" : long,
        "size": size,
        "locInso": dni
    }

@app.route("/makepred", methods=["POST"])
@cross_origin
def makepred():
    data = request.get_json()
    lat = float(data["lat"])
    long = float(data["long"])
    size = float(data["size"])
    inso = float(data["inso"])

    return {
        "success": model.process(lat, long, size, inso)
    }

@app.route("/test", methods=["POST"])
@cross_origin
def test():
    data = request.get_json()
    return data.text

@app.route("/", methods=["GET"])
@cross_origin
def home():
    return "you have reached the home page. hi alex"

if __name__ == "__main__":
    app.run()