
let rerenderEntireTree = () => {
  console.log('State changed')
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "15" },
      { id: 2, message: "It's my first post", likesCount: "12" },
      { id: 3, message: "React is awesome", likesCount: "20" },
    ],
    newPostText: "it-kamasutra.com"
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Dima" },
      { id: 3, name: "Anna" },
      { id: 4, name: "Sveta" },
      { id: 5, name: "Roma" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Sveta" },
    ]
  }
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 10
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscibe = (observer) => {
  rerenderEntireTree = observer
}

export default state;
