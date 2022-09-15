import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../features/serviceSlice';
import Service from '../Service/Service';
import styles from './serviceMap.module.css'
import { Triangle } from 'react-loader-spinner'

const ServiceMap = () => {
    const service = useSelector((state) => state.serviceSlice.service)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.serviceSlice.loading);

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    if (loading) {
        return <div className={styles.tri}>
            <Triangle
                height="300"
                width="300"
                color="#a2c046"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    return (
        <>
            <div className={styles.ourServices}>
                <span className={styles.service}>
                    Наши услуги
                </span>
            </div>
            <div className={styles.mapMainOfMain}>
                <div className={styles.mapMain}>
                    {service.map((elem) => {
                        return <Service items={elem} />
                    })}
                </div>
            </div>
        </>
    );
};

export default ServiceMap;