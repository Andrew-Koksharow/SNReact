import dialogsReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./users_reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;