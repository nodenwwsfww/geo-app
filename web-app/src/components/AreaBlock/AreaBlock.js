import SelectAreaAndRemovePlots from "./SelectAreaAndRemovePlots";
import MaxMinPlotArea from "./MaxMinPlotArea";
import React from "react";

function AreaBlock({districtsData, setDistrictsData}) {

    return (
        <div className="plot-area-block">
            <SelectAreaAndRemovePlots
                districtsData={districtsData} setDistrictsData={setDistrictsData}
            />
            <MaxMinPlotArea/>
        </div>
    );
}

export default AreaBlock;