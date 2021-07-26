import React from 'react';
import { 
    listHeaders,
    operatingSystems, 
    clientApplications, 
    microsoftProducts, 
    googleProducts, 
    languagesAndDatabases, 
    repositories } from '../Lists/TechnicalSummaryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faCogs } from '@fortawesome/free-solid-svg-icons';

const TechnicalSummary = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="fs-2">
                        <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>&nbsp;
                        Technical Summary
                        <hr></hr>
                    </div>
                    <div className="col-md-12">
                        <div className="alert alert-warning">
                            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>&nbsp;
                            <b>NOTE:</b>&nbsp;Under maintenance mode
                        </div>
                    </div>
                    {/* <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="header-darkRed">
                                <tr>
                                    { listHeaders.map(item => (
                                        <td>{item}</td>
                                    )) }
                                </tr>
                            </thead>
                            <tbody className="body-white">
                                <tr>
                                    <td>
                                        <ul className="list-unstyled">
                                            { operatingSystems.map(item => (
                                                <li>{item}</li>
                                            )) }
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-unstyled">
                                            { clientApplications.map(item => (
                                                <li>{item}</li>
                                            )) }
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-unstyled">
                                            { microsoftProducts.map(item => (
                                                <li>{item}</li>
                                            )) }
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-unstyled">
                                            { googleProducts.map(item => (
                                                <li>{item}</li>
                                            )) }
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-unstyled">
                                            { languagesAndDatabases.map(item => (
                                                <li>{item}</li>
                                            )) }
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="list-unstyled">
                                            { repositories.map(item => (
                                                <li>{item}</li>
                                            )) }
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default TechnicalSummary;
