import React from 'react';
import Reviews from '../components/ui/Reviews/Reviews';
import styles from '../styles/About.module.css'
import { Link } from 'react-router';

const About = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      
<div className={styles.heroText}>
  <h1>
    <span className={styles.highlight}>🐝 Bee</span> - твой проводник 
    в мир <span className={styles.animatedText}>настоящей любви</span>
  </h1>

  <div className={styles.featureCard}>
    <h2>🕰 Машина времени для сердец</h2>
    <p>
      Создай <span className={styles.accent}>уникальный профиль</span>:
      <ul className={styles.eraList}>
        <li>🏰 Средневековый рыцарь</li>
        <li>🎩 Денди Викторианской эпохи</li>
        <li>🚀 Космический исследователь 3024 года</li>
      </ul>
      <span className={styles.note}>Или придумай собственный образ!</span>
    </p>
  </div>

  <div className={styles.featureCard}>
    <h2>🤖 Ваш личный пчеловод</h2>
    <p>
      Наш ИИ-помощник будет:
      <ul className={styles.aiList}>
        <li>🔍 Искать "цветы совместимости"</li>
        <li>📊 Анализировать 127 параметров совпадения</li>
        <li>💞 Создавать уникальные сценарии знакомств</li>
      </ul>
    </p>
    <div className={styles.progressBar}>
      <div className={styles.progressFill} style={{width: '95%'}}>
        95% успешных пар
      </div>
    </div>
  </div>

  <div className={styles.ctaSection}>
    <p className={styles.ctaText}>
      Пройди наш <span className={styles.gradientText}>тест-квиз</span> и узнай:
    </p>
    <div className={styles.quizFeatures}>
      <div className={styles.quizCard}>🌟 Уровень твоей романтичности</div>
      <div className={styles.quizCard}>💫 Идеальную историческую эпоху</div>
      <div className={styles.quizCard}>❤️ Совместимость с партнером</div>
    </div>
    <Link to="/liked">
    <button className={styles.startButton}>
    Начать поиск своей половинки →
    </button>
    </Link>
  </div>
</div>
            
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-between',
                gap: '20px'
            }}>
                
                <Reviews
                    name="Диана"
                    text="Нашла отличного парня. Вместе уже 10 лет"
                    url="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-1024.png"
                />
                <Reviews
                    name="Аня"
                    text="Было много хороших парней, но выбрала одного - уже выхожу замуж)"
                    url="https://mangaship.net/Content/img/human-avatar.png"
                />
                <Reviews
                    name="Иван"
                    text="Лучшее приложение для знакомств"
                    url="https://www.ergo-style.ru/dileram/ergostyle.com.ua/images_new/dostavka_i_oplata/manager.png"
                />
                <Reviews
                    name="Влад"
                    text="Нашел жену)"
                    url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Creative-Tail-People-man-2.svg/640px-Creative-Tail-People-man-2.svg.png"
                />

                
                <Reviews
                    name="Максим"
                    text="ИИ-помощник реально работает. Рекомендую всем знакомым!"
                    url="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
               
               
            </div>
        </div>
    );
};

export default About;