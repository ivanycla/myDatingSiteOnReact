import { useState } from 'react';  
import { useNavigate} from 'react-router';
import { useEffect } from 'react';

import ShowLikedUser from '../components/ui/ShowLikedUser/ShowLikedUser'; 
import style from '../styles/Likes.module.css'
function LikesPage() {  
  const navigate = useNavigate();
  let [isShow,setIsShow]=useState(false);
  const [user, setUser] = useState([  
    {  
      id: 1,  
      img: './Снимок экрана 2024-08-20 162523.png',  
      name: 'Diana',  
      isLike: false,  
      isTestComplete:true
    },  
    {  
      id: 2,  
      img: 'https://avatars.mds.yandex.net/i?id=c7e52eeca590452b36c2bbe9b8d1c9d0ce16eb76-5249406-images-thumbs&n=13',  
      name: 'Anna',  
      isLike: false,  
      isTestComplete:false
    },  
  ]);  

  const [currentImg, setCurrentImg] = useState('./Снимок экрана 2024-08-20 162523.png');  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [isLike, setIsLike] = useState(false);  

 
  

  const [likedUsers, setLikedUsers] = useState(() => {
    const saved = localStorage.getItem("likedUsers");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("likedUsers", JSON.stringify(likedUsers));
  }, [likedUsers]);

  
const handleChatStart = (user) => {  
 

      navigate(`/chat/${user.id}`, { state: { user } });  
 
};  

  const handelNextUser = () => {  
    setCurrentIndex((prevIndex) => {  
      const newIndex = prevIndex + 1;  
      if (newIndex >= user.length) {  
        setCurrentImg(user[0].img);  
        return 0;  
      }  
      setCurrentImg(user[newIndex].img);  
      return newIndex;  
    });  
  };  

  
  const likeLogic = () => {  
    setIsLike(true);  
    setLikedUsers((prevLikedUsers) => [...prevLikedUsers, user[currentIndex]]);  
    handelNextUser();  
   
  };

  return (  
    <div className="App">  
    <div className={style.imgContainer}>
      
      <div className={style.userCard}>
      
        <div className={style.imgWrapper}>
        <h2 className={style.userName}>{user[currentIndex].name}</h2>
          <img 
            src={currentImg} 
            alt='profile' 
            className={style.img}
          />
          
        </div>
      </div>
    </div>
    
    <div className={style.btnContainer}>
      <button onClick={likeLogic} className={style.btnLikeDisLike}>
        ❤️ LIKE
      </button>  
      <button onClick={handelNextUser} className={style.btnLikeDisLike}>
        ✖️ DISLIKE
      </button>
      
      <button 
        onClick={() => setIsShow(true)} 
        className={style.btnLikeDisLike}
      >
        🔔 Уведомления ({likedUsers.length})
      </button>
      
    </div>

    {isShow && (
      <ShowLikedUser  
        likedUsers={likedUsers} 
        onStartChat={handleChatStart} 
        isShow={isShow} 
        onClose={() => setIsShow(false)}
      />
    )}
  </div>  
  );  
}  

export default LikesPage;