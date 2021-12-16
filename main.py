import os
import sqlite3

from flask import Flask, render_template, url_for, request, flash, session, redirect, abort, g

from FDataBase import FDataBase

DATABASE = '/tmp/metrics.db'
DEBUG = True
SECRET_KEY = 'aljr39jal39j9vjl9FJS(DFJ39rj9j3rn9v39'
MAX_CONTENT_LENGTH = 1024 * 1024

app = Flask(__name__)
app.config.from_object(__name__)
app.config.update(dict(DATABASE=os.path.join(app.root_path, 'metrics.db')))


def connect_db():
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = sqlite3.Row
    return conn


def create_db():
    db = connect_db()
    with app.open_resource('sq_db.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()
    db.close()
    print("Done.")


def get_db():
    if not hasattr(g, 'link_db'):
        g.link_db = connect_db()
    return g.link_db


@app.before_request
def before_request():
    global dbase
    db = get_db()
    dbase = FDataBase(db)


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'link_db'):
        g.link_db.close()


dbase = None


@app.route("/")
def index():
    db = get_db()
    return render_template("index.html", metrics=dbase.getMetrics())


@app.route("/metric/<alias>")
def showMetric(alias):
    db = get_db()
    dbase = FDataBase(db)
    name = dbase.getMetric(alias)
    if not name:
        abort(404)
    return render_template("metric.html", name=name)


@app.route("/time")
def time():
    db = get_db()
    dbase = FDataBase(db)
    return render_template("base.html", metrics=dbase.getTime(), title="Time")


@app.route("/temperature")
def temperature():
    db = get_db()
    dbase = FDataBase(db)
    return render_template("base.html", metrics=dbase.getTemperature(), title="Temperature")


@app.route("/mass")
def mass():
    db = get_db()
    dbase = FDataBase(db)
    return render_template("base.html", metrics=dbase.getMass(), title="Mass")


if __name__ == "__main__":
    app.run(debug=True)
