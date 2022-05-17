import {useState} from "react";
import PlotInfo from './PlotInfo';

import axios from 'axios';
import {API_URL} from "../config";

function BBLSearch() {
    const [inputValue, setInputValue] = useState('');
    const [plotInfoModal, setPlotInfoModal] = useState({
        area: 0,
        district: 'Las Vegas',
    });

    const handleInput = (value) => {
        if (!Number.isSafeInteger(+value) && value !== ' ') return;
        setInputValue(+value);
    };

    const handleSearch = async () => {
        const bbl = +inputValue;
        if (isNaN(bbl)) return;
        setInputValue('');

        const response = await axios.get(API_URL + `/plots/info`, {
            params: {
                bbl
            }
        });
        const plot = response.data;

        setPlotInfoModal({
            area: plot.area,
            district: plot.district,
        });
        const modal = document.querySelector('#plot-info');
        modal.style.display = 'block';

    };
    return (
        <div style={{marginBottom: '15px'}}>
            <PlotInfo area={plotInfoModal.area} district={plotInfoModal.district}/>
            <div className="input-group">
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control"
                           value={inputValue} onChange={({target}) => handleInput(target.value)}/>

                    <label className="form-label" htmlFor="form1">Search by bbl</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSearch}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>

    );
}

export default BBLSearch;