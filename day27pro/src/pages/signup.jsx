import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3022/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
        .then((res) => res.json())
        .then(() => {
            navigate("/login");
        })
        .catch((err) => {
            console.log(err);
        });
        setState({
            username: "",
            email: "",
            password: ""
        });
    };

    return (
        <div className="container">
           
            <form onSubmit={handleSubmit} className="form">
            <h1 className="form-title">Sign Up</h1>
                <input 
                    type="text" 
                    value={state.username} 
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange} 
                    className="input"
                />
                <input 
                    type="text" 
                    name="email" 
                    value={state.email} 
                    placeholder="Email Id" 
                    onChange={handleChange} 
                    className="input"
                />
                <input 
                    type="password" 
                    name="password" 
                    value={state.password} 
                    placeholder="Password" 
                    onChange={handleChange} 
                    className="input"
                />
                <input type="submit" className="submitButton" />
            </form>
        </div>
    );
}

export default Signup;
