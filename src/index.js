import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, { subscibe } from "./redux/state";
import "./index.css";
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscibe(rerenderEntireTree);

reportWebVitals();
