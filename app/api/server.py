from flask import Flask

app = Flask(__name__)

@app.route("/test")
def members():
    return {"members":["memberone", "membertwo", "memberthree"]}


if __name__ == "__main__":
    app.run(debug=True)