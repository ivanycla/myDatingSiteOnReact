import React from 'react';
import Message from '../Message/Message';
import style from'../MessageList/MessageList.module.css'
const MessageList = ({ messages,deleteMessage}) => {
  const sortedMessages = messages.sort((a, b) => 
    new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
    <div className={style.messages}>
      {sortedMessages.map(msg => (
        <Message
          deleteMessage={deleteMessage}
          key={msg.id}
          sender={msg.sender}
          timestamp={msg.timestamp}
          text={msg.text}
          messageId={msg.id}
        />
      ))}
    </div>
  );
};

export default MessageList;