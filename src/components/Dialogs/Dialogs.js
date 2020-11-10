import React from "react";
import dialogs from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { updateNewMessageBodyCreator } from "../../redux/state";
import { sendMessageCreator } from './../../redux/state';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newMessageBody = state.newMessageBody;


  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div>
      <div className={dialogs.dialogs}>
        <div className={dialogs.dialogsItems}>{dialogsElements}</div>
        <div className={dialogs.messages}>{messagesElements}</div>
        <div className={dialogs.textarea}>
          <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
          </div>
          <div className={dialogs.button}>
              <button onClick={ onSendMessageClick }>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
