import "../Styles/Auth.css";

function Login() {

    return(
        <div className="form-div">
            <h4 className="header">Login</h4>
            <form>
                <label htmlFor="Username">Username:</label>
                <input 
                    type="text"
                    name="username">
                </input>
                <label htmlFor="Password">Password:</label>
                <input 
                    type="password"
                    name="password">
                </input>
                <button type="submit">Go!</button>
            </form>
            <p>Don't have an account?</p>
            <button>Sign up!</button>
        </div>
    )
};

export default Login;