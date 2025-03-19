import React, { useState } from 'react';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      console.log("Успешный вход:", userCredential.user);
      navigate('/liked'); // Редирект после успешного входа
      
    } catch (error) {
      let errorMessage = 'Ошибка входа';
      switch(error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Некорректный email';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Пользователь заблокирован';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Пользователь не найден';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Неверный пароль';
          break;
        default:
          errorMessage = error.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Вход в систему</h2>
        <form onSubmit={handleLogin}>
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

          {error && <div className={styles.error}>{error}</div>}

          <button 
            type="submit" 
            className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
            disabled={loading}
          >
            {loading ? 'Выполняется вход...' : 'Войти'}
          </button>

          <div className={styles.linkText}>
            Ещё нет аккаунта? <Link to="/RegForm" className={styles.link}>Зарегистрироваться</Link>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Login;