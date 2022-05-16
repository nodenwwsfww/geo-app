import React, {useEffect, useState} from 'react';
function SelectAreaRange({minPlotArea, maxPlotArea}) {
    const [rangeValue, setRangeValue] = useState(500);

    const handleInput = ({target})  => {
        setRangeValue(+target.value);
    };

    return (
        <>
            <label htmlFor="customRange3" className="form-label">Area range</label>
            <input type="range" className="form-range" min={minPlotArea} max={maxPlotArea} step="100" id="customRange3"
                   value={rangeValue} onChange={handleInput}/>
        </>
    );
}
export default SelectAreaRange;