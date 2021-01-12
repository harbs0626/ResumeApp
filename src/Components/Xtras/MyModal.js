import React from 'react';
import {
    experience, 
    experienceList } from '../Lists/WorkExperienceList';

const MyModal = (props) => {
    var myTarget = "#" + props.Key;

    var myTitle = props.Title;
    var expList = [];
    if (experience.includes(myTitle)){
        expList = experienceList.filter(function(item){
            return item.startsWith(myTitle);
        });
    }

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
                            <div className="text-left">
                                <ul>
                                    { expList.map(item => (
                                        <li>{item.replace(props.Title + "|", "")}</li>
                                    )) }
                                </ul>
                                {/* {test} */}
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
