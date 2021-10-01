import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "../Styles/InfoBox.css";
import EventFeed from "../Feed/EventFeed.js";


function InfoBox({info}) {
    const [view, setView] = useState('')
    const history = useHistory();

    function handleClick(view) {
        return function reroute() {
            history.push(view)
            setView(view)
        }
    }

    return(
        <div className="info-box">
            <h1>Event Info</h1>
            <p>{info.id}</p>
            <p>{info.title}</p>

            <button onClick={handleClick(info.id)}>Report concern</button>
            <button onClick={handleClick('posts')}>See available assistance</button>

            {view === 'form' && <h1>Form</h1>}
            {view === 'posts' && <h1>Posts</h1>}

        </div>
    )
}

export default InfoBox