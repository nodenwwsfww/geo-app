import React, {useState} from 'react';
function SelectAreaAndRemovePlots({districtsData, setDistrictsData}) {

    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const handleClick = () => {
        if(Number.isNaN(minValue) || Number.isNaN(minValue)) return;
        // api axios. get plots that have area in range (minValue, maxValue),
        // then get plot.properties.districtName; and then find district by name

/*        plotsData.filter((plot) => {
            const area = +plot.properties["shape_area"];
            if (area >= minValue && area <= maxValue) {
                const plotDistrict = plot.properties.districtName;
                const district = districtsData.filter((district) => district.properties.ntaname === plotDistrict)[0];
                district.properties.plotsCount--;
            }
            else return plot;
        });*/

        const plotDistrict = 'districtName';
        const district = districtsData.filter((district) => district.properties.ntaname === plotDistrict)[0];
        district.properties.plotsCount--;

        setDistrictsData(...districtsData);

        //axios to update districts

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