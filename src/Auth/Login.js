import React, {useState, useContext} from "react";
import NewsFeed from "../API/NewsFeed";
import "../Styles/Auth.css";
import UserContext from "./UserContext";
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username required';
    } else if (values.username.length > 30) {
      errors.username = 'Must be 30 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Password required';
    } else if (values.password.length > 20) {
      errors.password = 'Must be 20 characters or less';
    }
  
    return errors;
  };


const Login = () => {

   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

   return (
       <div className="form-div">
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            {formik.errors.username ? <div className="form-error">{formik.errors.username}</div> : null}
        
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div className="form-error">{formik.errors.password}</div> : null}
        
            <button type="submit">Submit</button>
            </form>
       </div>
   );
 };

// function Login() {

//     const initialState = {
//         username: "",
//         password: ""
//     }

//     const {setToken} = useContext(UserContext);
//     const [formData, setFormData] = useState(initialState);

//     const handleChange = e => {
//         const {name, value} = e.target;
//         setFormData(data => ({
//             ...data,
//             [name]: value
//         }
//         ))
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         let res = await NewsFeed.loginUser(formData);
//         if (res) {
//             // Set token and add to localStorage
//             setToken(res.token);
//             localStorage.setItem('token', res.token)
//             // Clear form
//             setFormData(initialState);

//         } else {
//             alert(`Error: ${res}`)
//         }
//     }


//     return(
//         <div className="form-div">
//             <h4 className="header">Login</h4>
//             <form>
//                 <label htmlFor="Username">Username:</label>
//                 <input 
//                     type="text"
//                     name="username"
//                     onChange={handleChange}>
//                 </input>
//                 <label htmlFor="Password">Password:</label>
//                 <input 
//                     type="password"
//                     name="password"
//                     onChange={handleChange}>
//                 </input>
//                 <button onClick={handleSubmit}>Go!</button>
//             </form>
//             <p>Don't have an account?</p>
//             <button>Sign up!</button>
//         </div>
//     )
// };

export default Login;