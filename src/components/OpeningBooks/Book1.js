import React from 'react';
import styles from './Book1Anim.module.css';

const Book1 = () => {
    return (
        <div id="card">
            <div className={styles.container}>
                <div className={styles.door1}></div>
                <p>1</p>
            </div>
        </div>
    );
};

export default Book1;