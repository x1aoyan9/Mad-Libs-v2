import React from 'react';
import styles from './Book6Anim.module.css';
import bookCover6 from '../../assets/img/bookCoverSix.jpg';

const Book6 = () => {
    return (
        <div id="card">
            <div class={styles.container}>
                <div class={styles.door6}>
                    <img src={bookCover6} alt="calming blues vibes"/>
                </div>
                <p>Vacation</p>
            </div>
        </div>
    );
};

export default Book6;