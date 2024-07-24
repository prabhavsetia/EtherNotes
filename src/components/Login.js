import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const host = "http://localhost:8000";
    const handleSubmitted = async (e) => {
        e.preventDefault();
        const url = '/api/auth/login/';
        const response = await fetch(`${host}${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        console.log("logging in");
        if (json.success) {
            //save the token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Logged in successfully", "success");
        }
        else {
            props.showAlert("Invalid credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-4'>
            <form onSubmit={handleSubmitted}>
                <div className=" mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} name='email' id="email" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} name='password' id="password" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
    )
}

export default Login;
