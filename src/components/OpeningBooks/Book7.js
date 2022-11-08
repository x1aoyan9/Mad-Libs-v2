import React from 'react';
import styles from './Book7Anim.module.css';
import bookCover7 from '../../assets/img/wonder2.jpg';

const Book7 = () => {
    return (
        <div id="card">
            <div class={styles.container}>
                <div class={styles.door7}>
                    <img src={bookCover7} alt="blurred city night lights"/>
                </div>
                <p>Wonder</p>
            </div>
        </div>
    );
};

export default Book7;