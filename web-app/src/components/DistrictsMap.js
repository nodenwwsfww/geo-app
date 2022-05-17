import React, {useEffect, useState} from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import jsonGeoMap from '../data/districts.json';
import '../App.css';
import BBLSearch from "./BBLSearch";
import AreaBlock from "./AreaBlock/AreaBlock";
import axios from "axios";


function DistrictsMap() {
    const [districtsData, setDistrictsData] = useState([]);

    useEffect(async () => {
        try {
            const _districtsData = await axios.get(serverUrl+'/api/districts');
            setDistrictsData(_districtsData);
        } catch(error) {
            console.error(error);
        }

    });

    const onEachDistrict = (district, layer) => {
        const {district, area} = district;
        const plotsCount = district.plots_count;

        const popupContent = `
            <Popup>
                Name: ${district}<br/>
                Plots count: ${plotsCount}<br/>
                Area: ${area}
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
                <AreaBlock setDistrictsData={setDistrictsData}
                />
            </div>

            <MapContainer style={{height: '80vh'}} zoom={11}
                          center={[40.66526788720486, -74.05334472656251]}>
                <GeoJSON
                    data={jsonGeoMap}
                    onEachFeature={onEachDistrict}
                />
            </MapContainer>
        </div>
    )
}

export default DistrictsMap;