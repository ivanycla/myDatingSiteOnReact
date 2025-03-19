import React from 'react';
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import style from './Message.module.css';

const Message = ({ sender, timestamp, text, deleteMessage, messageId }) => {
  return (
    <div className={`${style.message} ${style[sender]}`}>
      <div className={style.messageContent}>
        <div className={style.textBlock}>
          <time className={style.time}>{new Date(timestamp).toLocaleString()}</time>
          <p className={style.text}>{text}</p>
          <DeleteBtn 
          deleteMessage={deleteMessage}
          messageId={messageId}
          className={style.deleteBtn}
        />
        </div>
      
      </div>
    </div>
  );
};

export default Message;