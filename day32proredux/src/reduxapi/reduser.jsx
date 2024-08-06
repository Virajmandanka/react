  
 import { DATA, DATA_ERROR, EMAIL, ERROR,LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, PASSWORD, USERNAME } from "./type"
 
  
  const initialState = {
    data: [],
    error: null,
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA:
            return {
                ...state,
                data: action.payload,
            };
        case DATA_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};



const initialState_sing = {
    username: "",
    email: "",
    password: "",
    error: false,
};

export const signUpReducer = (state = initialState_sing, action) => {
    switch (action.type) {
        case USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};



// reducer.js
// import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

const initialStatee = {
  email: null,
  password: null,
  isLoading: false,
  error: null,
};

export const loginReducer = (state = initialStatee, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload,
        password: action.payload,
        isLoading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
