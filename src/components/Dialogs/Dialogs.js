import React from "react";
import { NavLink } from "react-router-dom";
import dialogs from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={dialogs.dialog + " " + dialogs.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={dialogs.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Anna" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Roma" },
    { id: 6, name: "Valera" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div>
      <div className={dialogs.dialogs}>
        <div className={dialogs.dialogsItems}>{dialogsElements}</div>
        <div className={dialogs.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
