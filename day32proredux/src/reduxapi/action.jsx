
import { DATA, DATA_ERROR, EMAIL, ERROR,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, L_EMAIL, L_PASSWORD, PASSWORD, USERNAME } from "./type"


export const fetchingData = () => (dispatch)=> {
    fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((res) => {
            dispatch({
                type: DATA,
                payload: res
            });
        })
        .catch((error) =>
            dispatch({
                type: DATA_ERROR,
                payload: error,
            })
        );
};




export const SignupAction = (formState, navigate) => (dispatch) => {
    fetch('http://localhost:3021/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        alert("Successfully submitted data");
        navigate("/login"); 
      }
      dispatch({
        type: USERNAME,
        payload: data.username,
      });
      dispatch({
        type: EMAIL,
        payload: data.email,
      });
      dispatch({
        type: PASSWORD,
        payload: data.password,
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
      console.log(error);
    });
  };


  // actions.js
// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const Login_Action = (loginData, navigate) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3021/users?email=${loginData.email}`);
    // dispatch(loginRequest());
    try {
      const data = await response.json();

      if (data.length > 0) {
        alert('Login successfully');
        localStorage.setItem('Login', true);
        dispatch(loginSuccess(data[0]));
        navigate('/product');
      } else {
        alert('Invalid email or password');
        dispatch(loginFailure('Invalid email or password'));
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailure(error.toString()));
    }
  };
};
