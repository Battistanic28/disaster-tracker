import './Styles/App.css';
import { useEffect, useState } from "react";
import EonetAPI from "./API/EonetAPI";
import NewsFeed from "./API/NewsFeed";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyMap from "./MapComponents/MyMap.js";
import EventFeed from "./Feed/EventFeed.js";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import NavBar from "./NavBar";
import Loader from "./Loader";
import UserContext from "./Auth/UserContext";

function App() {
  const [eventsData, setEventsData] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState();

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true)
      const events = await EonetAPI.getGlobalEvents('wildfires');
      const posts = await NewsFeed.getPosts();
      setEventsData(events)
      setPosts(posts)
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
                  <Route exact path="/:eventId">
                    {!loading ? <EventFeed /> : <Loader />}
                  </Route>
                  <Route exact path="/profile"></Route>
              </Switch>
          </main>
          </UserContext.Provider>
      </BrowserRouter>    
    </>
  );
}

export default App;
