import React from 'react';
import { useHistory } from "react-router-dom";
import "../Styles/InfoBox.css";


function InfoBox({info}) {
    const {id, title, description} = info
    const history = useHistory();

    function handleClick() {
        history.push(`event/${info.id}`)
    }

    return(
        <div className="info-box">
            <h1>Event Info</h1>
            <p>{`Event ID: ${id}`}</p>
            <p>{`Title: ${title}`}</p>
            <p>{`Description: ${description}`}</p>

            <button name="view" onClick={handleClick}>See available assistance</button>
        </div>
    )
}

export default InfoBox