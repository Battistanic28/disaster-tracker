import { React } from "react";
import "../Styles/CommentThread.css";


function CommentThread({post}) {
    return (
        <div className="user-comment">
            <div className="user-info">
                <img className="profile-image" src="/default-profile.png" alt="profile-image"></img>
                <span className="username">@{post.userId}</span>
            </div>
            <p>{post.post}</p>
        </div>
    )
}

export default CommentThread;