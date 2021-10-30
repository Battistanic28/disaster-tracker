import React, {useContext} from "react";
import NewsFeed from "../API/NewsFeed.js";
import UserContext from "../Auth/UserContext";
import jwt from "jsonwebtoken";
import { useFormik } from 'formik';
import "../Styles/PostForm.css";

const validate = (values) => {
	const errors = {};
	if (!values.post) {
		errors.post = 'Field cannot be blank.';
	}

	return errors;
};


function PostForm({eventId, setNewPost}) {

    const {token} = useContext(UserContext);
    const {username} = jwt.decode(token);

    const formik = useFormik({
		initialValues: {
            event_id: eventId,
            user_id: username,
			post: ''
		},
		validate,
		onSubmit: async (values) => {
            let res = await NewsFeed.createPost(values);
            if (res) {
                setNewPost(values)
    
            } else {
                alert(`Error: ${res}`)
            }
		}
	});


        return(
            <div className="comment-form">
                <form onSubmit={formik.handleSubmit}>
                    <textarea 
                        placeholder="What's on your mind?"
                        id="post"
                        name="post"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.post}>
                    </textarea>

                {formik.touched.post && formik.errors.post ? (
					<div className="form-error">{formik.errors.post}</div>
				) : null}
                    <div className="btn-wrapper">
                        <button className="submit-btn" type="submit">Publish!</button>
                    </div>
                </form>
            </div>
        )
    };

export default PostForm;