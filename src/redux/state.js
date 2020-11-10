const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  // private
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "15" },
        { id: 2, message: "It's my first post", likesCount: "12" },
        { id: 3, message: "React is awesome", likesCount: "20" },
      ],
      newPostText: "it-kamasutra.com",
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
      newMessageBody: ""
    },
    sidebar: {
      friends: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state
  },
  subscibe(observer) {
    this._callSubscriber = observer;
  },
//  business logic methods

  dispatch(action){
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 10,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 5, message: body});
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

window.store = store;
export default store;
