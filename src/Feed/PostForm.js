import React, {useState} from "react";
import NewsFeed from "../API/NewsFeed.js";


function Signup() {

    const [formData, setFormData] = useState("");

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
            setFormData("");

        } else {
            alert(`Error: ${res}`)
        }
    }

        return(
            <div>
                <form>
                    <textarea 
                        name="text"
                        onChange={handleChange}>
                    </textarea>
                    {formData && <p>{240-formData.text.length} characters remaining.</p>}
                    <button  onClick={handleSubmit} type="submit">Publish!</button>
                </form>
            </div>
        )
    };

export default Signup;