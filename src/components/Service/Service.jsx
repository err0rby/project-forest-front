import React from 'react';
import styles from './service.module.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { serverUrl } from '../../serverUrl';

const Service = ({ items }) => {
    return (
        <div className={styles.serviceMain}>
            <div className={styles.serviceImages}>
                <img className={styles.imageService} alt='asd' src={`${serverUrl}/img/${items.image}`} />
            </div>
            <div className={styles.serviceInfo}>
                <h3 className={styles.serviceName}>{items.name}</h3>
                <h4 className={styles.serviceDescription}>{`${items.description.substr(0, 125)}...`}</h4>
                <Link className={styles.button} to={items._id}><button className={styles.button}>Узнать больше</button></Link>
            </div>
        </div>
    );
};

Service.propTypes = {
    items: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired
}

export default Service;