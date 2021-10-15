import React, {useState, useContext} from "react";
import NewsFeed from "../API/NewsFeed.js";
import UserContext from "../Auth/UserContext";
import jwt from "jsonwebtoken";
import "../Styles/PostForm.css";


function PostForm({eventId, setNewPost}) {

    const {token} = useContext(UserContext);
    const {username} = jwt.decode(token);
    
    const initialState = {
        event_id: eventId,
        user_id: username,
        post: ""
    }
    
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }
        ))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let res = await NewsFeed.createPost(formData);
        if (res) {
            alert("success!")
            setNewPost(formData)
            setFormData("");

        } else {
            alert(`Error: ${res}`)
        }
    }

        return(
            <div className="comment-form">
                <form>
                    <textarea placeholder="What's on your mind?"
                        name="post"
                        onChange={handleChange}>
                    </textarea>
                    {/* {formData && <p>{240-formData.text.length} characters remaining.</p>} */}
                    <button  onClick={handleSubmit} type="submit">Publish!</button>
                </form>
            </div>
        )
    };

export default PostForm;