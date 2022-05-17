import json
import datetime

f_plots = open("_plots.json", "r")
data_plots = json.load(f_plots)


f_districts = open("_districts.json", "r")
data_districts = json.load(f_districts)

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="zeHQZEcsm5c50RjDMkJg",
  database="geo"
)

mycursor = mydb.cursor()

def fillPlotsWithDistrict():
  for feature in data_plots['features']:
      if "district" in feature["properties"]:
        district = feature["properties"]["district"]
        bbl = feature["properties"]["bbl"]

        sql = "UPDATE geo.plots SET district = %s WHERE bbl=%s"
        val = (district, bbl)
        
        mycursor.execute(sql, val)

        mydb.commit()

  print('done')


def fillDistrictsWithCount():
  for feature in data_districts['features']:
      if feature["properties"]:
        district = feature["properties"]["ntaname"]
        plots_count=0
        area = feature["properties"]["shape_area"]
        if "plots_count" in feature["properties"]:
          plots_count = feature["properties"]["plots_count"]

        now = datetime.date(2022, 5, 17);
        
        sql = "INSERT INTO geo.districts (plots_count, area, district, updatedAt, createdAt) VALUES (%s, %s, %s, %s, %s)"
        val = (plots_count, area, district, now, now)
        
        mycursor.execute(sql, val)

        mydb.commit()


fillDistrictsWithCount()

