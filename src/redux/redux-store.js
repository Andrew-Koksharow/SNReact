import dialogsReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import { combineReducers, createStore } from "redux";
import usersReducer from "./users_reducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer

});


let store = createStore(reducers);

export default store;