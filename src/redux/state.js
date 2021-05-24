import { rerrenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hello, it my first post', likesCount: 12 },
            { id: 2, message: 'yo', likesCount: 5 },
               ]
    },
    dialogPage: {
        dialogsData: [
            { id: 1, name: 'Andrew' },
            { id: 2, name: 'Sveta' },
            { id: 3, name: 'Julia' },
            { id: 4, name: 'Pasha' },
            { id: 5, name: 'Polina' },
            { id: 6, name: 'Seva' },
        ],
        messagesData: [
            { id: 1, message: 'hello' },
            { id: 2, message: 'how are you?' },
            { id: 3, message: 'hi' },
        ]
    }
}


export let addPost = (postMessage) => {
        let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerrenderEntireTree(state);
}



export default state;