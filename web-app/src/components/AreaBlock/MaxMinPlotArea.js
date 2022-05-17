import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_URL} from "../../config";

function MaxMinPlotArea({}) {
    const [minPlotArea, setMinPlotArea] = useState(1);
    const [maxPlotArea, setMaxPlotArea] = useState(1000);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(API_URL + '/plots/min-max-area');
            const [minArea, maxArea] = response.data;

            setMinPlotArea(minArea);
            setMaxPlotArea(maxArea);
        };
        fetchData();

    }, []);

    return (
        <div className="max-min-area-plots">

            <div className="badge bg-primary text-wrap" style={{width: "6rem", float: "left"}}>
                <span>Min plot area: {minPlotArea}</span>
            </div>

            <div className="badge bg-primary text-wrap" style={{width: "6rem", float: "right"}}>
                <span>Max plot area: {maxPlotArea}</span>
            </div>

        </div>
    );
}
export default MaxMinPlotArea;