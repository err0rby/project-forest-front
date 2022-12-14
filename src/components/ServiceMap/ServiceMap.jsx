import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../../features/serviceSlice';
import Service from '../Service/Service';
import styles from './serviceMap.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Triangle } from 'react-loader-spinner'


const ServiceMap = () => {
    const service = useSelector((state) => state.serviceSlice.service)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.serviceSlice.loading);

    useEffect(() => {
        Aos.init({ duration: 2000 })
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
                <div className={styles.service}>
                    <p>
                        Наши услуги
                    </p>
                    <p>
                        список опций
                    </p>
                </div>
                
            </div>
            <div data-aos="fade-up" className={styles.mapMainOfMain}>
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