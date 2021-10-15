import { React } from "react";
import "../Styles/UserPost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import UserPost from "./UserPost";


function ReplyThread() {
    return (
        <UserPost post="EONET_5435"></UserPost>
    )
}

export default ReplyThread;
