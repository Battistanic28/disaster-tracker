import { React } from "react";
import "../Styles/CommentThread.css";


function CommentThread({post}) {
    return (
            <div className="userComment">
                <p>{post.post}</p>
                <span>-{post.userId}</span>
            </div>
    )
}

export default CommentThread;