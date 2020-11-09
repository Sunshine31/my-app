import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" alt=""/>
      {props.message}
      <div>
        <span>like: {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
