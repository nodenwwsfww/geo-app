import React from 'react';
function PlotInfo ({area, district}) {
    const closeModal = () => document.querySelector('#plot-info').style.display = 'none';
    return (
        <div className="modal" id="plot-info">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Plot info</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Area: {area}</p>
                        <p>District: {district}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={closeModal}>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlotInfo;