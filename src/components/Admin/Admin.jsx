import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from '../../features/requestSlice';
import style from './Admin.module.css'

const Admin = () => {

    const dispatch = useDispatch();
    const requests = useSelector(state => state.requestSlice.requests);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    return (
        <div className={style.main}>
            <div className={style.f}><h1>Заявки</h1></div>
            <div className={style.mainCard}>
                <div className={style.wrapper}>{requests.map((req) => {
                    return <div className={style.card}>
                        <div className={style.imag}><img width={300} src={`http://localhost:3013/img/${req.workDescription.image}`} alt='asadasd' /></div>
                        <div className={style.pad}> Имя:{req.yourName}</div>
                        <div> Адрес:{req.yourAddress}</div>
                        <div> Номер телефона:{req.phoneNumber}</div>
                        <div className={style.pad2}> Вид рыботы:{req.workDescription.name}</div>
                        <button>Принять заявку</button>
                    </div>
                })}</div>
            </div>
        </div>
    );
};

export default Admin;