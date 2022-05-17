import SelectAreaAndRemovePlots from "./SelectAreaAndRemovePlots";
import MaxMinPlotArea from "./MaxMinPlotArea";
import React from "react";

function AreaBlock({setDistrictsData}) {
    return (
        <div className="plot-area-block">
            <SelectAreaAndRemovePlots
                setDistrictsData={setDistrictsData}
            />
            <MaxMinPlotArea/>
        </div>
    );
}

export default AreaBlock;