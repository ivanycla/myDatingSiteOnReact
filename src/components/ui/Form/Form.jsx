import React from 'react';
import axios from 'axios';
import style from '../Form/Form.module.css'
const Form = ({ onSubmit, textValue, setTextValue }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!textValue.trim()) return;

    try {
    
      onSubmit(textValue, 'me');
      
      
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const randomPost = response.data[Math.floor(Math.random() * response.data.length)];
      
      
      setTimeout(() => {
        onSubmit(randomPost.body, 'bot');
      }, 1000);

      setTextValue('');
    } catch (error) {
      console.error("Ошибка при загрузке", error);
    }
  };

  return (
<form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.input}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        type="text"
        placeholder="Написать сообщение..."
      />
      <button 
        className={style.sendButton}
        type="submit"
        disabled={!textValue.trim()}
      >
        <svg className={style.sendIcon} viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </form>
  );
};

export default Form;