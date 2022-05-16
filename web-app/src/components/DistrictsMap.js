import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import districtsData from '../data/districts.json';
import '../App.css';
import "leaflet/dist/leaflet.css";
import BBLSearch from "./BBLSearch";
import AreaBlock from "./AreaBlock/AreaBlock";

function DistrictsMap() {
    const onEachDistrict = (district, layer) => {
        const districtName = district.properties.ntaname;
        const districtArea = district.properties.shape_area;
        const plotsCount = 0;

        const popupContent = `
            <Popup>
                Name: ${districtName}<br/>
                Plots count: ${plotsCount}<br/>
                Area: ${districtArea}
            </Popup>
        `;

        layer.bindPopup(popupContent);

        layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)

    };


    return (
        <div>
            <div className="items-container">
                <h1 style={{ textAlign: "center" }}>Map</h1>
                <BBLSearch/>
                <AreaBlock/>
            </div>

            <MapContainer style={{height: '80vh'}} zoom={11}
                          center={[40.66526788720486, -74.05334472656251]}>
                <GeoJSON
                    data={districtsData.features}
                    onEachFeature={onEachDistrict}
                />
            </MapContainer>
        </div>
    )
}

export default DistrictsMap;