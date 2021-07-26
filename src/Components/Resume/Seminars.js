import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faUserClock } from '@fortawesome/free-solid-svg-icons';

const SeminarsTrainingsAttended = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="fs-2">
                        <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>&nbsp;
                        Seminars or Trainings Attended
                        <hr></hr>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-md-12">
                            <div className="alert alert-warning">
                                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>&nbsp;
                                <b>NOTE:</b>&nbsp;Under maintenance mode
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                        <div className="fs-5 align-items-center d-flex justify-content-center">
                                            {props.date1}
                                        </div>
                                    </div>
                                <div className="card-body">
                                    <span className="fs-5">{props.title1}</span><br></br>
                                    {props.companyName1}
                                    <br></br>
                                    <br></br>
                                    <p className="summaryJustify">{props.description1}</p>
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
                                    <span className="fs-5">{props.title2}</span><br></br>
                                    {props.companyName2}
                                    <br></br>
                                    <br></br>
                                    <p className="summaryJustify">{props.description2}</p>
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
                                    <span className="fs-5">{props.title3}</span><br></br>
                                    {props.companyName3}
                                    <br></br>
                                    <br></br>
                                    <p className="summaryJustify">{props.description3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.date4}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="fs-5">{props.title4}</span><br></br>
                                    {props.companyName4}
                                    <br></br>
                                    <br></br>
                                    <p className="summaryJustify">{props.description4}</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeminarsTrainingsAttended;
