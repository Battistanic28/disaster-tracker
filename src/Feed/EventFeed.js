import { React } from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import NewsFeed from "../API/NewsFeed";
import CommentThread from "./CommentThread";
import Loader from "../Loader";
import "../Styles/EventFeed.css";


function EventFeed() {

    const {eventId} = useParams();
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getEvents = async () => {
          setLoading(true)
          const posts = await NewsFeed.getPostsByEventId(eventId);
          setPosts(posts)
          setLoading(false)
        }
        getEvents()
      }, [])

      if (loading) {
          return (<Loader />)
      }

      return(
          <div>
              <h1>{eventId} Updates</h1>
              {posts.map(post => (
                  <CommentThread post={post}></CommentThread>
              ))}
          </div>
      )

}

export default EventFeed;
