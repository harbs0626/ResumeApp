import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { courseWorks } from '../Lists/CourseWorkList';

const Education = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="fs-2">
                        <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>&nbsp;
                        Educational Background(s)
                        <hr></hr>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-md-12">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.date1}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.diploma1}</span><br></br>
                                    <span className="card-text">{props.school1}</span><br></br>
                                    <span className="card-text">{props.program1}</span><br></br>
                                    Related coursework:
                                    <ul className="ul-columns">
                                        { courseWorks.map(courses => (
                                            <li>{courses}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.date2}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.diploma2}</span><br></br>
                                    <span className="card-text">{props.school2}</span><br></br>
                                    <span className="card-text">{props.program2}</span><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.date3}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.diploma3}</span><br></br>
                                    <span className="card-text">{props.school3}</span><br></br>
                                    <span className="card-text">{props.program3}</span><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;
