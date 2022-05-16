import React, {useEffect, useState} from 'react';
function MaxMinPlotArea() {

    const [minPlotArea, setMinPlotArea] = useState(1);
    const [maxPlotArea, setMaxPlotArea] = useState(1000);
    useEffect(() => {
        //
    })

    if (!minPlotArea || !maxPlotArea) return;

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