import { useState, useEffect } from 'react';
import Form from "../Form/Form"
import MessageList from '../MessageList/MessageList';
import style from '../Chat/Chat.module.css';

const Chat = ({ user }) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    if (user?.id) {
      try {
        const saved = localStorage.getItem(`chat_${user.id}`);
        setMessages(saved ? JSON.parse(saved) : []);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        setMessages([]);
      }
    }
  }, [user?.id]);

  
  const handleDelete = (messageId) => {
    setMessages(prev => {
      const updatedMessages = prev.filter(msg => msg.id !== messageId);
      
     
      if (user?.id) {
        localStorage.setItem(`chat_${user.id}`, JSON.stringify(updatedMessages));
      }
      
      return updatedMessages;
    });
  };

  const handleSubmit = (text, sender) => {
    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      sender,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => {
      const updated = [...prev, newMessage];
      if (user?.id) {
        localStorage.setItem(`chat_${user.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  return (
    <div className={style.chatContainer}>
      <div className={style.chatHeader}>
        <div className={style.userInfo}>
          <h2>{user?.name}</h2>
        </div>
        <div className={style.statusIndicator}></div>
      </div>
      
      <MessageList messages={messages} deleteMessage={handleDelete} />
      
      <div className={style.formWrapper}>
        <Form
          onSubmit={handleSubmit}
          textValue={text}
          setTextValue={setText}
        />
      </div>
    </div>
  );
};

export default Chat;