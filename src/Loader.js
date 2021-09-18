import './Styles/App.css';
import loading from "./loading.gif";

function Loader() {
    return (
        <div className="loading-spinner">
            <img height="100px" src={loading} alt="loading..."></img>
            <p>Loading...</p>
        </div>
    )
}

export default Loader;