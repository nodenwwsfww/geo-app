import React, {useEffect, useState} from 'react';
function SelectAreaRange({rangeValue}) {

    const handleClick = ({target})  => {
        if (!rangeValue) return;
        // api
    };

    return (
        <>
            <input className="btn btn-outline-primary" type="reset" value="Remove" onClick={handleClick}
                   style={{marginLeft: "35%", marginBottom: '2px'}}
            />
        </>
    );
}
export default SelectAreaRange;