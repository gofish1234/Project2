#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct 12 11:20:51 2019

@author: chrismiller
"""

# import necessary libraries
from sqlalchemy import func
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/crime_data.sqlite"

db = SQLAlchemy(app)


class HateCrime(db.Model):
    __tablename__ = 'hatecrime'
    
    INCIDENT_ID = db.Column(db.Integer)
    DATA_YEAR = db.Column(db.Integer, primary_key=True)
    STATE_NAME = db.Column(db.String)
    REGION_NAME = db.Column(db.String)
    OFFENDER_RACE = db.Column(db.String)
    OFFENSE_NAME = db.Column(db.String)
    BIAS_DESC = db.Column(db.String)

    def __repr__(self):
        return '<HateCrime %r>' % (self.name)


# Create database classes
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()


# Create a route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# Query the database and return the jsonified results
@app.route("/data")
def data():
     sel = [HateCrime.DATA_YEAR, func.count(HateCrime.DATA_YEAR)]
     results = db.session.query(*sel).\
        group_by([[DATA_YEAR], [STATE_NAME]]).all()
    df = pd.DataFrame(results, columns=['year', 'counts'])
    return jsonify(df.to_dict(orient="records"))


if __name__ == "__main__":
    app.run(debug=True)