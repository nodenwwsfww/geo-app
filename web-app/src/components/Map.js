import {GeoJSON, MapContainer} from "react-leaflet";
import jsonGeoMap from "../data/districts.json";
import React from "react";

function Map({districtsData}) {
    if (!districtsData.length) return;
    const onEachDistrict = (districtData, layer) => {
        const districtName = districtData.properties.ntaname;
        const {district, area, plots_count} = districtsData.find(data => data.district === districtName);


        const popupContent = `
            <Popup>
                Name: ${district}<br/>
                Plots count: ${plots_count}<br/>
                Area: ${area}
            </Popup>
        `;

        layer.bindPopup(popupContent);

        layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)

    };
    return (
        <MapContainer style={{height: '80vh'}} zoom={11}
                      center={[40.66526788720486, -74.05334472656251]}>
            <GeoJSON
                data={jsonGeoMap}
                onEachFeature={onEachDistrict}
            />
        </MapContainer>
    );
}

export default Map;