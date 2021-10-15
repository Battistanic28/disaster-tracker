import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "../Styles/InfoBox.css";
import EventFeed from "../Feed/EventFeed.js";
import PostForm from "../Feed/PostForm.js";


function InfoBox({info}) {
    const [view, setView] = useState('')
    const history = useHistory();

    function handleClick() {
        history.push(`event/${info.id}`)
    }

    return(
        <div className="info-box">
            <h1>Event Info</h1>
            <p>{info.id}</p>
            <p>{info.title}</p>

            <button name="view" onClick={handleClick}>See available assistance</button>
        </div>
    )
}

export default InfoBox