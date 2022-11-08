import React from 'react';
import styles from './Book1Anim.module.css';
import bookCover1 from '../../assets/img/bookCoverOne.jpg';

const Book1 = () => {
    return (
        <div id="card">
            <div className={styles.container}>
                <div className={styles.door1}>
                    <img src={bookCover1} alt="band book cover"/>
                </div>
                <p>Band</p>
            </div>
        </div>
    );
};

export default Book1;