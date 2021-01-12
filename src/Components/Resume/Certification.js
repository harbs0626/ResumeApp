import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Certification = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="fs-2">
                        <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>&nbsp;
                        Certification(s)
                        <hr></hr>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body border border-darkRed rounded">
                                    <span className="fs-5">{props.location1}</span><br></br>
                                    Issue Date: {props.issueDate1}<br></br>
                                    {props.exprDate1}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body border border-darkRed rounded">
                                    <span className="fs-5">{props.location2}</span><br></br>
                                    Issue Date: {props.issueDate2}<br></br>
                                    {props.exprDate2}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body border border-darkRed rounded">
                                    <span className="fs-5">{props.location3}</span><br></br>
                                    Issue Date: {props.issueDate3}<br></br>
                                    {props.exprDate3}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body border border-darkRed rounded">
                                    <span className="fs-5">{props.location4}</span><br></br>
                                    Issue Date: {props.issueDate4}<br></br>
                                    {props.exprDate4}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body border border-darkRed rounded">
                                    <span className="fs-5">{props.location5}</span><br></br>
                                    Issue Date: {props.issueDate5}<br></br>
                                    {props.exprDate5}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body border border-darkRed rounded">
                                    <span className="fs-5">{props.location6}</span><br></br>
                                    Issue Date: {props.issueDate6}<br></br>
                                    {props.exprDate6}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certification;
