import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {


  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
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
