import { React } from "react";
import { useEffect, useState, useContext } from "react";
import NewsFeed from "../API/NewsFeed";
import UserReply from "./UserReply";
import ReplyForm from "./ReplyForm";
import Loader from "../Loader";
import UserContext from "../Auth/UserContext";
import { v4 as uuid } from 'uuid';
import "../Styles/EventFeed.css";


function ReplyThread({postId}) {
    const {token} = useContext(UserContext);
    const [newReply, setNewReply] = useState([])
    const [replies, setReplies] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getEvents = async () => {
          setLoading(true)
          const replies = await NewsFeed.getRepliesByPostId(postId)
          setReplies(replies)
          setLoading(false)
        }
        getEvents()
      }, [newReply, postId])

      if (loading) {
          return (<Loader />)
      }

      return(
          <div>
              {replies.length > 0 ? replies.map(reply => (
                  <UserReply key={uuid()} reply={reply}></UserReply>
              )) : "Be the first to commment."}
              {token && <ReplyForm postId={postId} setNewReply={setNewReply}></ReplyForm>}
          </div>
      )
}

export default ReplyThread;
