import React from 'react';

const MyModal = (props) => {
    var myTarget = "#" + props.Key;

    return (
        <>
            <div className="d-grid gap-2">
            <button type="button" className="btn btn-secondary fontColor2" data-bs-toggle="modal" 
                data-bs-target={myTarget}>
                View details
            </button>
            </div>

            <div className="modal fade" id={props.Key} data-bs-backdrop="static" data-bs-keyboard="false" 
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{props.Title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" 
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                This page is under construction. My apologies for the inconvenience it has caused.
                                <br></br>
                                <img src="underConstruction.png" alt=""></img>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyModal;
