import { React } from "react";
import "./Styles/EventFeed.css";


function EventFeed({posts}) {

    if (posts.length > 0) {
        return (
            <div>
                <p>{posts[0].postId}</p>
                <p>{posts[0].post}</p>
            </div>
        )
    } else {
        return (
            <p>No active events.</p>
        )
    }
}

export default EventFeed;
