import React from 'react';
import styles from './service.module.css'
import { Link } from 'react-router-dom';

const Service = ({ items }) => {
    return (
        <div className={styles.serviceMain}>
            <div className={styles.serviceImages}>
                <img className={styles.imageService} alt='asd' src={`http://localhost:3013/img/${items.image}`} />
            </div>
            <div className={styles.serviceInfo}>
                <h3 className={styles.serviceName}>{items.name}</h3>
                <h4 className={styles.serviceDescription}>{`${items.description.substr(0, 125)}...`}</h4>
                <Link to={items._id}><button className={styles.button}>Узнать больше</button></Link>
            </div>
        </div>
    );
};

export default Service;