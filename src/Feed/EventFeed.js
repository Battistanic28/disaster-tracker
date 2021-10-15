import { React } from "react";
import { useEffect, useState, useContext } from "react";
import {useParams, useHistory} from "react-router-dom";
import NewsFeed from "../API/NewsFeed";
import UserPost from "./UserPost";
import PostForm from "./PostForm";
import Loader from "../Loader";
import UserContext from "../Auth/UserContext";
import "../Styles/EventFeed.css";


function EventFeed() {

    const {token} = useContext(UserContext);
    const {eventId} = useParams();
    const [newPost, setNewPost] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    function handleClick() {
        history.push(`/`)
    }

    useEffect(() => {
        const getEvents = async () => {
          setLoading(true)
          const posts = await NewsFeed.getPostsByEventId(eventId);
          setPosts(posts)
          setLoading(false)
        }
        getEvents()
      }, [newPost])

      if (loading) {
          return (<Loader />)
      }

      return(
          <div className="event-feed">
              <h3>{eventId}: Community Updates</h3>
              {token && <PostForm setNewPost={setNewPost} eventId={eventId} />}
              {posts.length > 0 ? posts.map(post => (
                  <UserPost post={post}></UserPost>
              )) : "Be the first to commment."}
              <button onClick={handleClick}>Back to Map</button>
          </div>
      )

}

export default EventFeed;
