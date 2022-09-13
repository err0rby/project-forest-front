import React from 'react';
import styles from './service.module.css'

const Service = ({ items }) => {
    return (
        <div className={styles.serviceMain}>
            <div className={styles.serviceImages}>
                <img className={styles.imageService} src={`http://localhost:3013/img/${items.image}`} />
            </div>
            <div className={styles.serviceInfo}>
                <h3 className={styles.serviceName}>{items.name}</h3>
                <h4 className={styles.serviceDescription}>{items.description}</h4>
                <button className={styles.button}>READ MORE <span className={styles.strelka}></span></button>
            </div>
        </div>
    );
};

export default Service;