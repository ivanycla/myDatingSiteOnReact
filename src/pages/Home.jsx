import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css'; 

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.montserratTitle}>Добро пожаловать в Bee!</h1>
      
      <nav className={styles.navContainer}>
        <Link to="/about" className={styles.navLink}>О нас</Link>
        <Link to="/login" className={styles.navLink}>Поиск второй половинки</Link>
      </nav>
    </div>
  );
};

export default Home;