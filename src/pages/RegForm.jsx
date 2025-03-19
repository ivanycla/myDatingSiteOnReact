import React, { useState } from 'react';
import { auth, db } from './firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../styles/RegForm.module.css';

const RegForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        bio,
        createdAt: new Date()
      });

      navigate('/login'); 
      
    } catch (error) {
      console.error('Registration Error:', error);
      
      let errorMessage = 'Ошибка регистрации';
      switch(error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email уже используется';
          break;
        case 'auth/weak-password':
          errorMessage = 'Пароль должен содержать минимум 6 символов';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Некорректный email';
          break;
        default:
          errorMessage = error.message;
      }
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };
const handle =()=>{
  
   const result= window.confirm("Здраствуйте у меня проблема с firebase с сервером который я использовал вы можете зарегистрироваться но у вас будет просиходить бесконечнная загрузка (( при этом вы можете зайти как этот пользователь которого вы зарегистрировали можете нажать отмена для проверки на пароли <6 или использовать уже существующую почту например ivanycka00@mail.ru ")
    if(result){ 
   setTimeout(()=>{
      navigate("/login")
    },3000)
    }
  }
  return (
    
    <div className={styles.container}>

      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Пароль:</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>О себе:</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="3"
            />
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
            disabled={loading}
            onClick={handle}
          >
            {loading ? 'Идет регистрация...' : 'Зарегистрироваться'}
          </button>

          <div className={styles.linkText}>
            Уже есть аккаунт? <Link to="/login" className={styles.link}>Войти</Link>
          </div>
       
        </form>
      </div>
    </div>
  );
};

export default RegForm;