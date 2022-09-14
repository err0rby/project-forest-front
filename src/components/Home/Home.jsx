import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComms, fetchComms } from '../../features/commentSlice';
import style from './Home.module.css'
import image from '../Home/image/image.jpg'
import { Link } from 'react-router-dom';
import Slider from './Slider';

const Home = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(state => state.applicationSlice.name);
    const comments = useSelector(state => state.commentSlice.comments);

    useEffect(() => {
        dispatch(fetchComms());
    }, [dispatch]);

    const handleSend = () => {
        dispatch(addComms({ name, text }));
        setText('')
    }

    return (
        <div className={style.main}>
            <div className={style.homeImg}>
                <Slider />
                <div className={style.textAbove}>
                    Роскошь пейзажа сделана доступной
                </div>
                <div className={style.buttonsHome}>
                    <Link to='/workers' className={style.buttonAbout}>О нас</Link>
                    <Link to='/service' className={style.buttonAbout1}>Услуги</Link>
                </div>
            </div>
            <div>{comments.map((com) => {
                return <div key={com._id}>
                    <div>{com.user.login}</div>
                    <div>{com.text}</div>
                </div>
            })}
            </div>
            <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={() => { handleSend() }}>send comment</button>
        </div>
    );
};

export default Home;