import './Styles/App.css';
import { useEffect, useState } from "react";
import EonetAPI from "./API/EonetAPI";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyMap from "./MapComponents/MyMap.js";
import EventFeed from "./Feed/EventFeed.js";
import ReplyThread from "./Feed/ReplyThread.js";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import NavBar from "./NavBar";
import Loader from "./Loader";
import UserContext from "./Auth/UserContext";


function App() {
  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'));


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
      <BrowserRouter>
        <UserContext.Provider value={{token, setToken}}>
          <NavBar></NavBar>
          <main>
              <Switch>
                  <Route exact path="/">
                      {!loading ? <MyMap eventsData={eventsData} /> : <Loader />}
                  </Route>
                  <Route exact path="/login">
                    <Login></Login>
                  </Route>
                  <Route exact path="/signup">
                    <Signup></Signup>
                  </Route>
                  <Route exact path="/event/:eventId">
                    {!loading ? <EventFeed /> : <Loader />}
                  </Route>
                  <Route exact path="/comments/reply">
                    {!loading ? <ReplyThread /> : <Loader />}
                  </Route>
                  <Route exact path="/user/:username"></Route>
              </Switch>
          </main>
          </UserContext.Provider>
      </BrowserRouter>    
    </>
  );
}

export default App;
