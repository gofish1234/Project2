# import necessary libraries
from sqlalchemy import func
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/crime_income_pop.db"

db = SQLAlchemy(app)


class HateCrime(db.Model):
    __tablename__ = 'crime'

    INCIDENT_ID= db.Column(db.Integer, primary_key=True)
    DATA_YEAR = db.Column(db.String)
    STATE_NAME = db.Column(db.String)
    REGION_NAME = db.Column(db.String)
    OFFENDER_RACE = db.Column(db.String)
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
    print (HateCrime.DATA_YEAR)
    print (func.strftime(HateCrime.DATA_YEAR))
    sel = [func.strftime(HateCrime.DATA_YEAR), HateCrime.DATA_YEAR]
    print (sel)
    results = db.session.query(*sel)
    #     group_by(func.strftime("%Y", HateCrime.DATA_YEAR)).all()
    print (results)
    df = pd.DataFrame(results, columns=['year', 'sightings'])
    print(df)
    return jsonify(df.to_dict(orient="records"))


if __name__ == "__main__":
    app.run(debug=True)
