import React, {useState} from 'react';
import axios from "axios";
function SelectAreaAndRemovePlots({setDistrictsData}) {

    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const handleClick = async () => {
        if(Number.isNaN(minValue) || Number.isNaN(minValue)) return;
        await axios.post(serverUrl + '/plots/delete', {
            minValue,
            maxValue,
        });

        const _districtsData = await axios.get(serverUrl+'/api/districts');
        setDistrictsData(_districtsData);

    };

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text">area start from</span>
                <input type="text" className="form-control" placeholder={100}
                       value={minValue}
                       onChange={({target}) => setMinValue(+target.value)}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">area until</span>
                <input type="text" className="form-control" placeholder={10000}
                       value={maxValue}
                       onChange={({target}) => setMaxValue(+target.value)}/>
            </div>

            <input className="btn btn-outline-primary" type="reset" value="Remove" onClick={handleClick}
                   style={{marginLeft: "auto", marginBottom: '30px'}}
            />


        </>
    );
}
export default SelectAreaAndRemovePlots;