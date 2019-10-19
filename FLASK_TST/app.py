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
@app.route('/data')
def data():
    sel = [func.strftime(HateCrime.DATA_YEAR), func.count(HateCrime.DATA_YEAR)]
    results = db.session.query(*sel).\
        group_by(func.strftime(HateCrime.DATA_YEAR)).all()   
    df = pd.DataFrame(results, columns=['year', 'number_crimes'])
    return jsonify(df.to_dict(orient="records"))

@app.route('/data2')
def data2():
    sel = [func.strftime(HateCrime.DATA_YEAR), func.count(HateCrime.DATA_YEAR)]
    results = db.session.query(*sel).\
        group_by(func.strftime(HateCrime.DATA_YEAR)).all()   
    df = pd.DataFrame(results, columns=['something', 'else'])
    return jsonify(df.to_dict(orient="records"))

@app.route('/data3')
def data3():
   crime_df = pd.read_sql_query("select * from crime;", con)
   income_df = pd.read_sql_query("select * from income;", con)
   pop_df = pd.read_sql_query("select * from population;", con)
   crime_groupby_df = crime_df.groupby(["DATA_YEAR", "STATE_NAME"], level = None, as_index=False).agg({"INCIDENT_ID" : 'count'})
   crime_groupby_df.columns = ("Year", "State", "SumHateCrimes")
   Merged = pd.merge(crime_groupby_df, income_df,  how='left', left_on=['Year', 'State'], right_on = ['Year', 'State'])
   Merged_final = pd.merge(Merged, pop_df, how='left', left_on=['Year', 'State'], right_on = ['Year', 'State'])
   Merged_final.columns = ("Year", "State", "HateCrimes(sum)", "Region", "Income", "Region2", "Pop")
   del Merged_final['Region2']
   return Merged_final.reset_index().to_json(orient='records')

if __name__ == "__main__":
    app.run(debug=True)