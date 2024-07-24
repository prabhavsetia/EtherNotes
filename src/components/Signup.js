import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate();
  const host = "http://localhost:8000";

  const handleSubmitted = async (e) => {
    e.preventDefault();
    const url = '/api/auth/createuser';
    const { name, email, password } = credentials;
    const response = await fetch(`${host}${url}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      console.log("creating a new user");
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account Created","success");
    }
    else{
      props.showAlert("Invalid Details","danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container my-4'>
      <form className="col g-3" onSubmit={handleSubmitted}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' onChange={onChange} id="name" minLength={3} required /> 
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' onChange={onChange} id="email"  /> 
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={8} required /> 
        </div>
        <div className="col-12 my-3">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
