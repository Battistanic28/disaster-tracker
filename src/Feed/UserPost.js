import { React, useState } from "react";
import "../Styles/UserPost.css";
// import ReplyThread from "./ReplyThread";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function UserPost({post}) {

    // const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="user-comment">
            <div className="user-info">
                <img className="profile-image" src="/default-profile.png" alt="profile-image"></img>
                <a href="/#" className="username">@{post.userId}</a>
            </div>
            <p>{post.post}</p>
            <p>created on: {(post.date).substring(0,10)}</p>
            <Link to={`/comments/reply`}>
                <FontAwesomeIcon className="icon" icon={faComments} size="lg" />
            </Link>

            {/* {isClicked && <ReplyThread></ReplyThread>} */}
        </div>
    )
}

export default UserPost;