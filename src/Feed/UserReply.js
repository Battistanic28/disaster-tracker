import { React } from "react";
import "../Styles/UserPost.css";


function UserReply({reply}) {
        return (
            <div className="user-reply">
                <div className="user-info">
                    <img className="profile-image" src="/default-profile.png" alt="profile"></img>
                    <a href="/#" className="username">@{reply.userId}</a>
                </div>
                <p>{reply.comment}</p>
                <p className="date">created on: {(reply.date).substring(0,10)}</p>
                {/* <hr /> */}
            </div>
        )
}

export default UserReply;