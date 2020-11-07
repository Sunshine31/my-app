import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    {id: 1, message: "Hi, how are you?"  , likesCount: "15"},
    {id: 2, message: "It's my first post", likesCount: "15"},
  ]

  let postsElements = postsData.map( p => <Post message={p.message} likes={p.likes} />)

  return (
      <div className={s.postsBlock}>
        <h3>
          My Posts
        </h3>
        <div>New post</div>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          { postsElements }
        </div>
      </div>
  );
};

export default MyPosts;
