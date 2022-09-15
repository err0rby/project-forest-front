import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addRequest } from '../../features/requestSlice';
import { fetchServices } from '../../features/serviceSlice';
import styles from './serviceOne.module.css'
import { ToastContainer, toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { Triangle } from 'react-loader-spinner'

const ServiceOne = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('');

    const notify = () => toast("Ваша заявка принята!", {
        type: 'success'
    });
    const { id } = useParams();
    const service = useSelector((state) => state.serviceSlice.service);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.serviceSlice.loading);

    const filtered = service.filter((elem) => {
        if (!id) return true

        return id === elem._id
    })

    useEffect(() => {
        
        dispatch(fetchServices())
    }, [dispatch])

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleAdd = () => {
        dispatch(addRequest({ name, number, address, id }))
        setName('')
        setAddress('')
        setNumber('')
        notify()
    }

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
        <div className={styles.main}>
            {filtered.map((elem) => {
                return (
                    <div className={styles.mainServiceOne}>
                        <div className={styles.serviceNameOne}>
                            <h2>{elem.name}</h2>
                        </div>
                        <div className={styles.serviceOneAll}>
                            <h3 className={styles.serviceOneDesc}>{elem.description}</h3>
                            <img className={styles.serviceOneImage} src={`http://localhost:3013/img/${elem.image}`} alt='asdasdfdsa' />
                        </div>
                        <div className={styles.serviceRequest}>
                            <div className={styles.firstInput}>
                                <input className={styles.first} onChange={handleName} value={name} placeholder='Ваше имя' />
                                <input onChange={handleNumber} value={number} placeholder='Номер телефона' />
                            </div>
                            <div className={styles.secondInput}>
                                <input className={styles.second} onChange={handleAddress} value={address} placeholder='Ваш адрес' />
                            </div>
                            <div className={styles.justBtn}>
                                <button disabled={!name || !number || !address} onClick={handleAdd} className={styles.buttonService}>Сделать заявку</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ServiceOne;