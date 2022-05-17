import React, {useEffect, useState} from 'react';
import '../App.css';
import BBLSearch from "./BBLSearch";
import AreaBlock from "./AreaBlock/AreaBlock";
import axios from "axios";
import {API_URL} from "../config";
import Map from "./Map";


function DistrictsMap() {
    const [districtsData, setDistrictsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const _districtsData = await axios.get(API_URL + '/districts/');
            setDistrictsData(_districtsData.data);
        };
        fetchData();
    }, []);


    return (
        <div>
            <div className="items-container">
                <h1 style={{textAlign: "center"}}>Map</h1>
                <BBLSearch/>
                <AreaBlock setDistrictsData={setDistrictsData}/>
            </div>

            <Map districtsData={districtsData}/>
        </div>
    )
}

export default DistrictsMap;