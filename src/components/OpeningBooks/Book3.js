import React from 'react';
import styles from './Book3Anim.module.css';
import bookCover3 from '../../assets/img/bookCoverThree.jpg';

const Book3 = () => {
    return (
        <div id="card">
            <div class={styles.container}>
                <div class={styles.door3}>
                    <img src={bookCover3} alt="lone mic in the spotlight"/>
                </div>
                <p>Judge</p>
            </div>
        </div>
    );
};

export default Book3;