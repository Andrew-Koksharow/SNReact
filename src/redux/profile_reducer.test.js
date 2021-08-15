import profileReducer, { addPostActionCreator } from "./profile_reducer";



test('new post should be added', () => {
let action = addPostActionCreator('KOKKOKKOK');
let state = {
  posts: [
    { id: 1, message: 'Hello, it my first post', likesCount: 12 },
    { id: 2, message: 'yo', likesCount: 5 },
  ]
};

  let newState = profileReducer(state ,action);

  expect(newState.posts.length).toBe(3)
});

