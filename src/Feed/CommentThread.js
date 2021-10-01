import { React } from "react";
import "../Styles/CommentThread.css";


function CommentThread({post}) {
    return (
            <div className="userComment">
                <p>{post.postId}</p>
                <p>{post.userId}</p>
                <p>{post.post}</p>
            </div>
    )

}

export default CommentThread;