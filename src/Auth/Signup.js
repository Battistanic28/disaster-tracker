import React, {useState} from "react";
import NewsFeed from "../API/NewsFeed.js";
import "../Styles/Auth.css";


function Signup() {

    const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
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
        let res = await NewsFeed.registerUser(formData);
        if (res) {
            alert("success!")
            setFormData(initialState);

        } else {
            alert(`Error: ${res}`)
        }
    }

        return(
            <div className="form-div">
                <form>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="fname">First Name:</label>
                    <input 
                        type="text"
                        name="firstName"
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="lname">Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        onChange={handleChange}>
                    </input>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text"
                        name="email"
                        onChange={handleChange}>
                    </input>
                    <button  onClick={handleSubmit} type="submit">Go!</button>
                </form>
                <p>Already have an account?</p>
                <button color="primary">Login!</button>
            </div>
        )
    };

export default Signup;