import { React, useState } from "react";
import "../Styles/UserPost.css";
import ReplyThread from "./ReplyThread";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'


function UserPost({post}) {

    const [isClicked, setIsClicked] = useState(false);

    function toggler() {
        setIsClicked(isClicked ? false : true)
    }

    return (
        <div className="user-comment">
            <div className="user-info">
                <img className="profile-image" src="/default-profile.png" alt="profile"></img>
                <a href="/#" className="username">@{post.userId}</a>
            </div>
            <p>{post.post}</p>
            {/* <p>created on: {(post.date).substring(0,10)}</p> */}
            <p>created on: {post.date}</p>

            <FontAwesomeIcon onClick={toggler} className="icon" icon={faComments} size="lg" />
            <hr />
            {isClicked && <ReplyThread postId={post.postId}></ReplyThread>}
        </div>
    )

}

export default UserPost;