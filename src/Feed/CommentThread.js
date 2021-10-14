import { React } from "react";
import "../Styles/CommentThread.css";


function CommentThread({post}) {
    return (
        <div className="user-comment">
            <div className="user-info">
                <img className="profile-image" src="/default-profile.png" alt="profile-image"></img>
                <a href="/#" className="username">@{post.userId}</a>
            </div>
            <p>{post.post}</p>
            <p>{post.timestamp}</p>
        </div>
    )
}

export default CommentThread;