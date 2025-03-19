import React from 'react';
import style from './DeleteBtn.module.css'
const DeleteBtn = ({deleteMessage,messageId}) => {
    function deleteMes(event){
        event.preventDefault();
        deleteMessage(messageId);
    }
    return (
        <button  className ={style.delete}onClick={deleteMes}>
        🗑️
        </button>
    );
};

export default DeleteBtn;
