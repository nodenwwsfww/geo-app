import SelectAreaRange from "./SelectAreaRange";
import MaxMinPlotArea from "./MaxMinPlotArea";
import React, {useState} from "react";
import RemovePlotsInAreaRange from "./RemovePlotsInAreaRange";

function AreaBlock() {

    const [minPlotArea, setMinPlotArea] = useState(1);
    const [maxPlotArea, setMaxPlotArea] = useState(1000);

    return (
        <div className="plot-area-block">
            <SelectAreaRange minPlotArea={minPlotArea} maxPlotArea={maxPlotArea}/>
            <MaxMinPlotArea
                minPlotArea={minPlotArea} maxPlotArea={maxPlotArea}
                setMinPlotArea={setMinPlotArea} setMaxPlotArea={setMaxPlotArea}
            />

            <RemovePlotsInAreaRange />
        </div>
    );
}
export default AreaBlock;