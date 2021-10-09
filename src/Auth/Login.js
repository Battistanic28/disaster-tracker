import React, {useState, useContext} from "react";
import NewsFeed from "../API/NewsFeed";
import "../Styles/Auth.css";
import UserContext from "./UserContext";


function Login() {

    const initialState = {
        username: "",
        password: ""
    }

    const {setToken} = useContext(UserContext);
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
        let res = await NewsFeed.loginUser(formData);
        if (res) {
            setToken(res.token);
            alert("success!")
            setFormData(initialState);

        } else {
            alert(`Error: ${res}`)
        }
    }


    return(
        <div className="form-div">
            <h4 className="header">Login</h4>
            <form>
                <label htmlFor="Username">Username:</label>
                <input 
                    type="text"
                    name="username"
                    onChange={handleChange}>
                </input>
                <label htmlFor="Password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    onChange={handleChange}>
                </input>
                <button onClick={handleSubmit}>Go!</button>
            </form>
            <p>Don't have an account?</p>
            <button>Sign up!</button>
        </div>
    )
};

export default Login;