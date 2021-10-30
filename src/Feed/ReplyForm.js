import React, {useState, useContext} from "react";
import NewsFeed from "../API/NewsFeed.js";
import UserContext from "../Auth/UserContext";
import jwt from "jsonwebtoken";
import { useFormik } from 'formik';
import "../Styles/PostForm.css";


const validate = (values) => {
	const errors = {};
	if (!values.comment) {
		errors.comment = 'Field cannot be blank.';
	}

	return errors;
};


function ReplyForm({postId, setNewReply}) {

    const {token} = useContext(UserContext);
    const {username} = jwt.decode(token);

    const formik = useFormik({
		initialValues: {
            post_id: postId,
            user_id: username,
            comment: ""
		},
		validate,
		onSubmit: async (values) => {
            let res = await NewsFeed.createReply(values);
            if (res) {
                setNewReply(values)
    
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
                        id="comment"
                        name="comment"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}>
                    </textarea>

                {formik.touched.comment && formik.errors.comment ? (
					<div className="form-error">{formik.errors.comment}</div>
				) : null}
                    <div className="btn-wrapper">
                        <button className="submit-btn" type="submit">Publish!</button>
                    </div>
                </form>
            </div>
        )
    };
    

export default ReplyForm;