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

    url = "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DNI&community=RE&longitude={}&latitude={}&format=JSON&start=2020&end=2020".format(
        lat,
        longi
    )
    response = requests.get(f"{url}").json()
    dni = response["properties"]["parameter"]["ALLSKY_SFC_SW_DNI"]["202001"]

    text = model.testfunc()

    return {
        "lat": lat,
        "long" : longi,
        "size" : size,
        "locDNI": dni
    }

@app.route("/prep")
def prep():
    return {
        "success": model.wakeup()
    }


if __name__ == "__main__":
    app.run(debug=True)