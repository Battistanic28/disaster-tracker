import './Styles/App.css';
import { useEffect, useState } from "react";
import NavBar from "./Nav/NavBar";
import MyMap from "./MapComponents/MyMap.js";
import EonetAPI from "./API/EonetAPI";
import Loader from "./Loader";

function App() {
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true)
      const events = await EonetAPI.getGlobalEvents('wildfires');
      setEventsData(events)
      setLoading(false)
    }
    getEvents()
  }, [])

  return (
    <>
    <NavBar></NavBar>
    {!loading ? <MyMap eventsData={eventsData} /> : <Loader />}
    </>
  );
}

export default App;
