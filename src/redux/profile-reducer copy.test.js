import profileReducer, { deletePost } from "./profile-reducer";

it ('after deleting length of messages should be decrement', () => {
    let action = deletePost(10)
    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'It\'s my first post', likesCount: 20 },
        ],
    }    
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)

})
