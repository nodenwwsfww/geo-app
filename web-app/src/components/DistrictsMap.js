import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import districtsData from '../data/districts.json';
import '../App.css';

import "leaflet/dist/leaflet.css";
import BBLSearch from "./BBLSearch";

function DistrictsMap() {
    const onEachDistrict = (district, layer) => {
        const districtName = district.properties.ntaname;
        const districtArea = district.properties.shape_area;
        const plotsCount = 0;

        const popup = `
            Name: ${districtName}
            Plots count: ${plotsCount}
            Area: ${districtArea}
        `;
        layer.bindPopup(districtName);

        layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)

    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Map</h1>

            <BBLSearch/>
            <MapContainer style={{height: '60vh'}} center={[-73.97604935657381,40.631275905646774]} zoom={0} center={[-73, 40]}>
                <GeoJSON
                    data={districtsData.features}
                    onEachFeature={onEachDistrict}
                />
            </MapContainer>
        </div>
    )
}

export default DistrictsMap;