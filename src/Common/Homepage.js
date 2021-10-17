import { React } from "react";
import "../Styles/Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faComments, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'


function Homepage() {

    return (
        <>
        <div className="image-div">
            <div className="welcome-container">                
                <h1>Welcome to FlameBuzz🔥</h1>
                <p>Keeping communities close when disaster strikes</p>
                <a href="/login" class="button">Login</a>
                <a href="/signup" class="button">Signup</a>
                <a href="/map" class="button">View active events</a>
            </div>
        </div>
        <div className="info-container">
            <div className="info-item">
                <h3>View wildfire events worldwide</h3>
                <FontAwesomeIcon className="info-icon" icon={faMapMarkedAlt} size="5x" />
            </div>
            <div className="info-item">
                <h3>Keep up to date with the latest discussion in your community</h3>
                <FontAwesomeIcon className="info-icon" icon={faComments} size="5x" />
            </div>
            <div className="info-item">
                <h3>Stay safe</h3>
                <FontAwesomeIcon className="info-icon" icon={faHandHoldingMedical} size="5x" />
            </div>
        </div>
        </>
    )
}

export default Homepage;


