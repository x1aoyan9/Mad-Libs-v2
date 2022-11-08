import React from 'react';
import styles from './Book5Anim.module.css';
import bookCover5 from '../../assets/img/bookCoverFive.jpg';

const Book5 = () => {
    return (
        <div id="card">
            <div class={styles.container}>
                <div class={styles.door5}>
                    <img src={bookCover5} alt="empty movie theater seats"/>
                </div>
                <p>Movie</p>
            </div>
        </div>
    );
};

export default Book5;