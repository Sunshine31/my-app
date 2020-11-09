import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div>
      <div className={dialogs.dialogs}>
        <div className={dialogs.dialogsItems}>{dialogsElements}</div>
        <div className={dialogs.messages}>{messagesElements}</div>
        <div className={dialogs.textarea}>
          <div>
            <textarea ref={newMessageElement}></textarea>
          </div>
          <div className={dialogs.button}>
              <button onClick={ addMessage }>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
