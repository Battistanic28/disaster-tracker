import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import NewsFeed from '../API/NewsFeed';
import '../Styles/Auth.css';
import UserContext from './UserContext';
import { useFormik } from 'formik';

const validate = (values) => {
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

	return errors;
};

const Login = () => {

    const history = useHistory();
	const { setToken } = useContext(UserContext);

	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validate,
		onSubmit: async (values) => {
            let res = await NewsFeed.loginUser(values);
            if (res) {
                setToken(res.token);
                localStorage.setItem('token', res.token)
                history.push("/map");
            } else {
                alert(`Error: Invalid username or password`)
            }
		}
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
				{formik.touched.username && formik.errors.username ? (
					<div className="form-error">{formik.errors.username}</div>
				) : null}

				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="form-error">{formik.errors.password}</div>
				) : null}
                    <button type="submit">Submit</button>
			</form>
		</div>
	);
};


export default Login;
