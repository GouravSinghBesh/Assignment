import React, { useState } from 'react'
import logo1 from '../assets/logo1.png'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({setIsloggedin}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    function changeInput(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsloggedin(true);
        navigate("/dashboard");
    }
    return (
        <div class="login-container">
            <img src={logo1}  class="image-1" />
            <p class="tagline">We Are Electric</p>
            <form onSubmit={handleSubmit} class="login-form">
                <label >
                    <input required type='email' name='email' placeholder='   E-mail' value={formData.email} onChange={changeInput} class="email"/>
                </label>

                <label>
                    <input type='password' name='password' value={formData.password} placeholder='   Password' onChange={changeInput} class="password"/>
                </label>

                <button class="login-btn">Login</button>

                <p class="forgot-ps">Forgot Password ?</p>
            </form>
        </div>
    )
}

export default Login