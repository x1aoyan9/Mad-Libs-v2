import React from 'react';
import styles from './Book2Anim.module.css';
import bookCover2 from '../../assets/img/giraffe-damian-patkowski-T-LfvX-7IVg-unsplash.jpg';

const Book2 = () => {
    return (
        <div id="card">
            <div class={styles.container}>
                <div class={styles.door2}>
                    <img src={bookCover2} alt="safari sunset"/>
                </div>
                <p>2</p>
            </div>
        </div>
    );
};

export default Book2;