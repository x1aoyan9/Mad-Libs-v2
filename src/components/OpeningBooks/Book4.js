import React from 'react';
import styles from './Book4Anim.module.css';
import bookCover4 from '../../assets/img/bookCoverFour.jpg';

const Book4 = () => {
    return (
        <div id="card">
            <div class={styles.container}>
                <div class={styles.door4}>
                    <img src={bookCover4} alt="scattered deck of playing cards"/>
                </div>
                <p>Magic</p>
            </div>
        </div>
    );
};

export default Book4;