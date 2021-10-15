import React, {useState, useContext} from "react";
import NewsFeed from "../API/NewsFeed.js";
import UserContext from "../Auth/UserContext";
import jwt from "jsonwebtoken";
import "../Styles/PostForm.css";


function ReplyForm({postId, setNewReply}) {

    const {token} = useContext(UserContext);
    const {username} = jwt.decode(token);
    
    const initialState = {
        post_id: postId,
        user_id: username,
        comment: ""
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
        let res = await NewsFeed.createReply(formData);
        if (res) {
            alert("success!")
            setNewReply(formData)
            setFormData(initialState);

        } else {
            alert(`Error: ${res}`)
        }
    }

        return(
            <div className="comment-form">
                <form>
                    <textarea placeholder="What's on your mind?"
                        name="comment"
                        onChange={handleChange}>
                    </textarea>
                    {/* {formData && <p>{240-formData.text.length} characters remaining.</p>} */}
                    <button  onClick={handleSubmit} type="submit">Publish!</button>
                </form>
            </div>
        )
    };

export default ReplyForm;