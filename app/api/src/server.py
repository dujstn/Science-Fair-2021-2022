from flask import Flask, request
import requests
import model

app = Flask(__name__)

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

    text = model.testfunc()

    return {
        "lat": lat,
        "long" : longi,
        "size" : size,
        "apiversion": version,
        "locDNI": text
    }

@app.route("/prep")
def prep():
    return {
        "success": model.wakeup()
    }


if __name__ == "__main__":
    app.run(debug=True)