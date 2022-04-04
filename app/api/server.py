from flask import Flask, request
import requests
import model
import modelBrk

app = Flask(__name__)


@app.route("/reqinso", methods=["POST"])
def reqinso():
    data = request.get_json()
    lat = float(data["lat"])
    long = float(data["long"])
    size = float(data["size"])

    url = "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DNI&community=RE&longitude={}&latitude={}&format=JSON&start=2010&end=2020".format(
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
def makepred():
    data = request.get_json()
    lat = float(data["lat"])
    long = float(data["long"])
    size = float(data["size"])
    inso = float(data["inso"])

    return {
        "success": model.process(lat, long, size, inso)
    }

@app.route("/makepred-brk", methods=["POST"])
def predbrk():
    data = request.get_json()
    lat = float(data["lat"])
    long = float(data["long"])
    size = float(data["size"])
    inso = float(data["inso"])
    prod = float(data["prod"])

    return{
        "success": modelBrk.process(lat, long, size, inso, prod)
    }

@app.route("/", methods=["GET"])
def home():
    return "you have reached the home page. congrats."

if __name__ == "__main__":
    app.run()