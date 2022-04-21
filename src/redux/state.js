// import dialogsReducer from "./dialog_reducer";
// import profileReducer from "./profile_reducer";

// let store = {
//     _state: {

//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hello, it my first post', likesCount: 12 },
//                 { id: 2, message: 'yo', likesCount: 5 },
//             ], 
//             newPostText: 'react-learn'
//         },
//         dialogPage: {
//             dialogsData: [
//                 { id: 1, name: 'Andrew' },
//                 { id: 2, name: 'Sveta' },
//                 { id: 3, name: 'Julia' },
//                 { id: 4, name: 'Pasha' },
//                 { id: 5, name: 'Polina' },
//                 { id: 6, name: 'Seva' },
//             ],
//             messagesData: [
             
//             ],
//             createNewMessagetext: 'm'
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callsubscriber() {
//         console.log('aa');
//     },
//     // OBSERVER
//     subscribe(observer) {
//         this._callsubscriber = observer;
//     },

//       dispatch(action) {


//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

//         this._callsubscriber(this._state);


//     }
// }




// export default store;