from flask import Flask

app = Flask(__name__)

@app.route("/testone")
def members():
    return {
        "testone":[
            "Testone",
            "Testtwo",
            "Testthree"
        ]
    }
if __name__ == "__main__":
    app.run(debug=True)