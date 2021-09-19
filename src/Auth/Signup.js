import "../Styles/Auth.css";


function Signup() {

    return(
        <div className="form-div">
            <form>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    name="username">
                </input>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    name="password">
                </input>
                <label htmlFor="fname">First Name:</label>
                <input 
                    type="text"
                    name="firstName">
                </input>
                <label htmlFor="lname">Last Name:</label>
                <input 
                    type="text"
                    name="lastName">
                </input>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    name="email">
                </input>
                <button type="submit">Go!</button>
            </form>
            <p>Already have an account?</p>
            <button color="primary">Login!</button>
        </div>
    )
};

export default Signup;