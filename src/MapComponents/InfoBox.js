import "../Styles/InfoBox.css";
import EventFeed from "../EventFeed.js";


function InfoBox({info}) {

    return(
        <div className="info-box">
            <h1>Event Info</h1>
            <p>{info.id}</p>
            <p>{info.title}</p>

            <button>Report concern</button>
            <button>See available assistance</button>
        </div>
    )
}

export default InfoBox