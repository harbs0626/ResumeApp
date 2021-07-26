import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import MyModal from '../Xtras/MyModal';

const Experience = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="fs-2">
                        <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>&nbsp;
                        Work Experience(s)
                        <hr></hr>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-md-12">
                            <div className="alert alert-warning">
                                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>&nbsp;
                                <b>NOTE:</b>&nbsp;Under maintenance mode
                            </div>
                        </div>
                        {/* <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.expDate0}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.expPosition0}</span><br></br>
                                    <span className="card-text">{props.expCompanyName0}</span><br></br>
                                    <br></br>
                                    <MyModal Key="Item0" Title={props.expPosition0}></MyModal>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.expDate1}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.expPosition1}</span><br></br>
                                    <span className="card-text">{props.expCompanyName1}</span><br></br>
                                    <br></br>
                                    <MyModal Key="Item1" Title={props.expPosition1}></MyModal>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.expDate2}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.expPosition2}</span><br></br>
                                    <span className="card-text">{props.expCompanyName2}</span><br></br>
                                    <br></br>
                                    <MyModal Key="Item2" Title={props.expPosition2}></MyModal>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.expDate3}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.expPosition3}</span><br></br>
                                    <span className="card-text">{props.expCompanyName3}</span><br></br>
                                    <br></br>
                                    <MyModal Key="Item3" Title={props.expPosition3}></MyModal>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100">
                                <div className="card-header header-darkRed">
                                    <div className="fs-5 align-items-center d-flex justify-content-center">
                                        {props.expDate4}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="card-text">{props.expPosition4}</span><br></br>
                                    <span className="card-text">{props.expCompanyName4}</span><br></br>
                                    <br></br>
                                    <MyModal Key="Item4" Title={props.expPosition4}></MyModal>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;