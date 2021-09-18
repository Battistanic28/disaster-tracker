import MyMap from "./MapComponents/MyMap.js";
import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const URL = "https://eonet.sci.gsfc.nasa.gov/api/v3/events?category=wildfires&status=open";
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true)
      const res = await axios.get(URL);
      const {events} = res.data
      setEventsData(events)
      setLoading(false)
    }
    getEvents()
  }, [])

  return (
    <>
    {!loading ? <MyMap eventsData={eventsData} /> : <h1>Loading...</h1>}
    </>
  );
}

export default App;
