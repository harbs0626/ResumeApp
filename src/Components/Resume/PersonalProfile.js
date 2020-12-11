import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

const PersonalProfile = (props) => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="fs-2">
                        <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>&nbsp;
                        Personal Profile
                        <hr></hr>
                    </div>
                    <p className="fs-5 text-muted summaryJustify">
                        {props.summary}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PersonalProfile;
