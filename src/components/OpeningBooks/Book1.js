import React from 'react';
import styles from './Book1Anim.module.css';
import bookCoverOne from '../../assets/img/bookCoverOne.jpg';

const Book1 = () => {
    return (
        <div id="card">
            <div className={styles.container}>
                <div className={styles.door1}>
                    <img src={bookCoverOne} alt="band book cover"/>
                </div>
            </div>
        </div>
    );
};

export default Book1;