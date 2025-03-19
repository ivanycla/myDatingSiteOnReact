import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ name, text, photo, timeline ,url}) => {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.cardHeader}>
                <img src={url} alt={name} className={styles.userPhoto} />
                <div>
                    <h3 className={styles.userName}>{name}</h3>
                    <p className={styles.timeline}>{timeline}</p>
                </div>
            </div>
            <p className={styles.reviewText}>{text}</p>
            <div className={styles.honeycombPattern}></div>
        </div>
    );
};

export default Reviews;