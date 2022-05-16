import React, {useEffect, useState} from 'react';
function MaxMinAreaPlots() {
    const [minPlotArea, setMinPlotArea] = useState(1);
    const [maxPlotArea, setMaxPlotArea] = useState(1);


    useEffect(() => {
        //
    })

    if (!minPlotArea || !maxPlotArea) return;

    return (
        <div className="max-min-area-plots">
            <div className="badge bg-primary text-wrap" style={{width: "6rem", marginRight: "25px"}}>
                <span>Max plot area: {maxPlotArea}</span>
            </div>

            <div className="badge bg-primary text-wrap" style={{width: "6rem"}}>
                <span>Min plot area: {minPlotArea}</span>
            </div>
        </div>
    );
}
export default MaxMinAreaPlots;