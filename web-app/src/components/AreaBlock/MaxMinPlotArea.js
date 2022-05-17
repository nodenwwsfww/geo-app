import React, {useEffect, useState} from 'react';
import axios from "axios";
function MaxMinPlotArea({}) {
    if (!minPlotArea || !maxPlotArea) return;

    const [minPlotArea, setMinPlotArea] = useState(1);
    const [maxPlotArea, setMaxPlotArea] = useState(1000);

    useEffect(async () => {
        const dataJson = await axios.get(serverUrl + '/plots/min-max-area');
        const [minArea, maxArea] = JSON.parse(dataJson);

        setMinPlotArea(minArea);
        setMaxPlotArea(maxArea);
    });

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