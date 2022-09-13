import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServices } from '../../features/serviceSlice';
import styles from './serviceOne.module.css'

const ServiceOne = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [work, setWork] = useState('')

    const { id } = useParams();
    const service = useSelector((state) => state.serviceSlice.service);
    const dispatch = useDispatch();

    const filtered = service.filter((elem) => {
        if (!id) return true

        return id === elem._id
    })

    useEffect(() => {
        dispatch(fetchServices())
    })

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleWork = (e) => {
        setWork(e.target.value)
    }

    const handleAdd = () => {

    }

    return (
        <div>
            {filtered.map((elem) => {
                return (
                    <div className={styles.mainServiceOne}>
                        <div className={styles.serviceNameOne}>
                            <h2>{elem.name}</h2>
                        </div>
                        <div className={styles.serviceOneAll}>
                            <h3 className={styles.serviceOneDesc}>{elem.description}</h3>
                            <img className={styles.serviceOneImage} src={`http://localhost:3013/${elem.image}`} />
                        </div>
                        <div className={styles.serviceRequest}>
                            <div className={styles.firstInput}>
                                <input className={styles.first} onChange={handleName} value={name} />
                                <input onChange={handleNumber} value={number} />
                            </div>
                            <div className={styles.secondInput}>
                                <input className={styles.second} onChange={handleAddress} value={address} />
                                <input onChange={handleWork} value={work} />
                            </div>
                            <button onClick={handleAdd}>Сделать заявку</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ServiceOne;