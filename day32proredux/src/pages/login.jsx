import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Login_Action } from '../reduxapi/action';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const change = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(Login_Action(login, navigate));
    setLogin({
      email: "",
      password: ""
    });
  };

  return (
    <form onSubmit={submit}>
      <p>Email address</p>
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        value={login.email}
        onChange={change}
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={login.password}
        onChange={change}
      />
      <button variant="dark" type="submit">Login</button>
    </form>
  );
}

export default Login;
