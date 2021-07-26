import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Personal = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="text-center">
                    <img className="img-thumbnail rounded-circle" src={props.imageName} alt="..." width={400} />
                </div>
                <br></br>
                <div className="text-center">
                    <div className="fs-1">{props.name}</div>
                    <div className="fs-4">{props.title}</div>
                    {/* <div className="fs-4">{props.address}</div> */}
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>&nbsp;
                    <a href={props.linkedIn} className="fs-5">
                        {props.linkedIn}</a>
                    <br></br>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>&nbsp;
                    <a href={props.gitHub} className="fs-5">
                        {props.gitHub}</a>
                </div>
            </div>
        </div>
    )
}

export default Personal;
