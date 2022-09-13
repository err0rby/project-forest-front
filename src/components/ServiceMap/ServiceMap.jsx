import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../features/serviceSlice';
import Service from '../Service/Service';
import styles from './serviceMap.module.css'

const ServiceMap = () => {
    const service = useSelector((state) => state.serviceSlice.service)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    return (
        <div className={styles.mapMainOfMain}>
        <div className={styles.mapMain}>
            {service.map((elem) => {
                return <Service items={elem} />
            })}
        </div>
        </div>
    );
};

export default ServiceMap;