import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsFeed from "../API/NewsFeed.js";
import Loader from "../Loader";
import "../Styles/UserProfile.css";


function UserProfile() {

    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState("");

    let { username } = useParams();
    // let token = localStorage.getItem('token')
    // let user = jwt.decode(token);

    useEffect(() => {
        const getUser = async () => {
            setLoading(true)
            const user = await NewsFeed.getUserInfo(username);
            setUserInfo(user);
            setLoading(false)
        }
        getUser()
      }, [username])

    if (loading) {
        return (<Loader />)
    }
    
    return(
        <div className="user-profile">
            <h1>User Profile:</h1>
            <p>Username: {userInfo.username}</p>
            <p>Name: {userInfo.firstName} {userInfo.lastName}</p>
            <p>Email: {userInfo.email}</p>
        </div>
    )


}

export default UserProfile;