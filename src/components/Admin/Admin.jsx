import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delRequest, fetchRequest } from '../../features/requestSlice';
import style from './Admin.module.css';
import { Triangle } from 'react-loader-spinner';
import { serverUrl } from '../../serverUrl';

const Admin = () => {
    const dispatch = useDispatch();
    const requests = useSelector(state => state.requestSlice.requests);
    const loading = useSelector(state => state.requestSlice.loading);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    const handleDel = (id) => {
        dispatch(delRequest(id))
    }

    if (loading) {
        return <div className={style.tri}>
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
        <div className={style.main}>
            <div className={style.f}><h1>Заявки</h1></div>
            <div className={style.mainCard}>
                <div className={style.wrapper}>{requests.map((req) => {
                    return <div className={style.card}>
                        <div className={style.imag}><img width={300} src={`${serverUrl}/img/${req.workDescription.image}`} alt='asadasd' /></div>
                        <div className={style.pad}> Имя:{req.yourName}</div>
                        <div> Адрес:{req.yourAddress}</div>
                        <div> Номер телефона:{req.phoneNumber}</div>
                        <div className={style.pad2}> Вид рыботы:{req.workDescription.name}</div>
                        <button onClick={() => handleDel(req._id)}>Принять заявку</button>
                    </div>
                })}</div>
            </div>
        </div>
    );
};

export default Admin;