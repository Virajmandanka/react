import {  applyMiddleware, legacy_createStore,combineReducers } from "redux";
// import { reducer } from "./reduser";
import {dataReducer} from "./reduser"
import {signUpReducer} from "./reduser"

import {loginReducer} from "./reduser"
import { thunk } from "redux-thunk";

const  MainReducer=combineReducers({

    data: dataReducer,
    signUp: signUpReducer,
    auth: loginReducer,
  
})

export const store = legacy_createStore(MainReducer,applyMiddleware(thunk))