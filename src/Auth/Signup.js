import React, { useContext } from "react";
import NewsFeed from "../API/NewsFeed.js";
import "../Styles/Auth.css";
import UserContext from './UserContext';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username required';
    } else if (values.username.length > 30) {
      errors.username = 'Username must be 30 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Password required';
    } else if (values.password.length > 20) {
      errors.password = 'Password must be 20 characters or less';
    }

    if (!values.firstName) {
        errors.firstName = 'First name required';
      } else if (values.firstName.length > 15) {
        errors.firstName = 'First name must be 15 characters or less';
      }

    if (!values.lastName) {
        errors.lastName = 'Last name required';
      } else if (values.lastName.length > 20) {
        errors.lastName = 'Last name must be 20 characters or less';
      }

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email';
      }
  
    return errors;
  };


function Signup() {

	const { setToken } = useContext(UserContext);

    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: ''
        },
        validate,
        onSubmit: async values => {
            let res = await NewsFeed.registerUser(values);
            if (res) {
                let newUser = await NewsFeed.loginUser({username: values.username, password: values.password})
                setToken(newUser.token);
                localStorage.setItem('token', newUser.token)
                alert('User created!')
            } else {
                alert(`Error: Username or email is already in use.`)
            }
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
                   onBlur={formik.handleBlur}
                   value={formik.values.username}
               />
               {formik.touched.username && formik.errors.username ? <div className="form-error">{formik.errors.username}</div> : null}
           
               <label htmlFor="password">Password</label>
               <input
                   id="password"
                   name="password"
                   type="password"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.password}
               />
               {formik.touched.password && formik.errors.password ? <div className="form-error">{formik.errors.password}</div> : null}

               <label htmlFor="firstName">First Name</label>
               <input
                   id="firstName"
                   name="firstName"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.firstName}
               />
               {formik.touched.firstName && formik.errors.firstName ? <div className="form-error">{formik.errors.firstName}</div> : null}

               <label htmlFor="lastName">Last Name</label>
               <input
                   id="lastName"
                   name="lastName"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.lastName}
               />
               {formik.touched.lastName && formik.errors.lastName ? <div className="form-error">{formik.errors.lastName}</div> : null}

               <label htmlFor="email">Email</label>
               <input
                   id="email"
                   name="email"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.email}
               />
               {formik.touched.email && formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : null}
           
               <button type="submit">Submit</button>
               </form>
          </div>
      );
    };





    // const initialState = {
    //     username: "",
    //     password: "",
    //     firstName: "",
    //     lastName: "",
    //     email: ""
    // }

    // const [formData, setFormData] = useState(initialState);

    // const handleChange = e => {
    //     const {name, value} = e.target;
    //     setFormData(data => ({
    //         ...data,
    //         [name]: value
    //     }
    //     ))
    // }

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     let res = await NewsFeed.registerUser(formData);
    //     if (res) {
    //         setFormData(initialState);

    //     } else {
    //         alert(`Error: ${res}`)
    //     }
    // }

    //     return(
    //         <div className="form-div">
    //             <form>
    //                 <label htmlFor="username">Username:</label>
    //                 <input 
    //                     type="text"
    //                     name="username"
    //                     onChange={handleChange}>
    //                 </input>
    //                 <label htmlFor="password">Password:</label>
    //                 <input 
    //                     type="password"
    //                     name="password"
    //                     onChange={handleChange}>
    //                 </input>
    //                 <label htmlFor="fname">First Name:</label>
    //                 <input 
    //                     type="text"
    //                     name="firstName"
    //                     onChange={handleChange}>
    //                 </input>
    //                 <label htmlFor="lname">Last Name:</label>
    //                 <input 
    //                     type="text"
    //                     name="lastName"
    //                     onChange={handleChange}>
    //                 </input>
    //                 <label htmlFor="email">Email:</label>
    //                 <input 
    //                     type="text"
    //                     name="email"
    //                     onChange={handleChange}>
    //                 </input>
    //                 <button  onClick={handleSubmit} type="submit">Go!</button>
    //             </form>
    //             <p>Already have an account?</p>
    //             <button color="primary">Login!</button>
    //         </div>
    //     )
    // };

export default Signup;