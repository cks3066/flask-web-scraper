from flask import Flask, render_template

app = Flask("SuperScrapper")

@app.route("/")
def home():
  return render_template("potato.html")

@app.route("/<username>")
def username(username):
  return f"Hello Your Name is {username}, How are you doing"

app.run(host="0.0.0.0")

