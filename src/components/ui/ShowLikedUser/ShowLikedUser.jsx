import React from 'react';
import style from './ShowLikedUser.module.css';

const ShowLikedUser = ({ likedUsers, onStartChat, isShow, onClose }) => {
  return (
    <div className={style.sideBar}>
      <div className={style.header}>
        <h2 className={style.title}>Уведомления</h2>
        <div className={style.notificationCount}>
          {likedUsers.length}
        </div>
      </div>
      
      <button onClick={onClose} className={style.closeButton} aria-label="Close">
        ✕
      </button>

      {likedUsers.map((likedUser) => (
        <div key={likedUser.id} className={style.userCard}>
          <img 
            src={likedUser.img} 
            alt={likedUser.name} 
            className={style.avatar}
          />
          <div className={style.userInfo}>
            <h3 className={style.userName}>{likedUser.name}</h3>
            <button 
              onClick={() => onStartChat(likedUser)} 
              className={style.btnStart}
            >
              Чат
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowLikedUser;