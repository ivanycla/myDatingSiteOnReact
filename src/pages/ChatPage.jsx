import { useLocation, useParams } from 'react-router-dom';
import Chat from '../components/ui/Chat/Chat';
import { useState } from 'react';
const ChatPage = () => {

const { state } = useLocation();
const [messages, setMessages] = useState([]);
const user = state?.user || {};

return (
    <div className="chat-page">
      
      <Chat 
        user={user}
        messages={messages}
        onNewMessage={newMessage => {
          setMessages(prev => [...prev, newMessage]);
        }}
    />
    </div>
  );
};

export default ChatPage;