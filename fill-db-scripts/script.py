import json
from xmlrpc.client import DateTime
from area import area
import datetime

f_plots = open("plots.json", "r")
data_plots = json.load(f_plots)


f_districts = open("districts.json", "r")
data_districts = json.load(f_districts)


import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="zeHQZEcsm5c50RjDMkJg",
  database="geo"
)

mycursor = mydb.cursor()


def fillPlotsWithArea():
  # takes about 2-3 minutes
  for feature in data_plots['features']:
      
      _area = area(feature['geometry'])
      bbl = feature['properties']['bbl']

      now = datetime.date(2022, 5, 17);
      
      sql = "INSERT INTO geo.plots (bbl, area, district, updatedAt, createdAt) VALUES (%s, %s, %s, %s, %s)"
      val = (bbl, _area, "Los tos", now, now)
      
      mycursor.execute(sql, val)

      mydb.commit()

  print('done')


from shapely.geometry import shape,mapping, Point, Polygon, MultiPolygon

def updatePlotsDistrict():
  for plot in data_plots['features']: #42000
    #plot
    plot_geometry = plot['geometry']
    plot_multipolygon = shape(plot_geometry)
    plot_polygons = list(plot_multipolygon)
    for district in data_districts['features']: #200
      condition = False
      #district
      district_geometry = district['geometry']
      district_multipolygon = shape(district_geometry)
      district_polygons = list(district_multipolygon)
      for district_polygon in district_polygons:
        if condition:
          break
        for plot_polygon in plot_polygons:
          condition = district_polygon.contains(plot_polygon) or plot_polygon.contains(district_polygon)
          if condition:
            break
      if condition:
        if ("plots_count" in district["properties"]):
          district["properties"]["plots_count"] += 1
        else:
          district["properties"]["plots_count"] = 1
          
        plot['properties']['district'] = district['properties']['ntaname']
        break
  return (data_districts, data_plots)


          
_districts, _plots = updatePlotsDistrict()

print('end')
f = open("_districts.json", "w")
f.write(json.dumps(_districts))

k = open("_plots.json", "w")
k.write(json.dumps(_plots))


    
