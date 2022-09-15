import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComms, fetchComms } from '../../features/commentSlice';
import style from './Home.module.css'
import image from '../Home/image/image.jpg'
import { Link } from 'react-router-dom';
import Slider from './Slider';
import { motion } from 'framer-motion';
import Maps from '../Maps/Maps';

const Home = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(state => state.applicationSlice.name);
    const comments = useSelector(state => state.commentSlice.comments);
    const count = comments.length
    console.log(comments.length)

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
            <div className={style.main_text}>
                <p>Отзывы наших клиентов</p>
            </div>
            <motion.div className={style.main_comments}>
                <motion.div drag='x' dragConstraints={{right: 0, left: count * -365}} className={style.main_comments_comments}>
                {comments.map((com) => {
                return <motion.div className={style.card_comments} key={com._id}>
                            <div className={style.card_comments1}><p>{com.user.login}</p></div>
                            <div className={style.card_comments2}><p>{com.text}</p></div>
                        </motion.div>
            })}
                </motion.div>
            </motion.div>
            <div className={style.main_form}>
                <p>Вы можете оставить свой отзыв:</p>
                <div className={style.form}>
                    <div className={style.form_input}><input value={text} onChange={(e) => setText(e.target.value)}></input></div>
                    <div className={style.form_btn}><button onClick={() => { handleSend() }}>Добавить комментарий</button></div>
                </div>
            </div>
            <div className={style.main_text2}>
                <p>Адрес нашей кампании</p>
            </div>
            <Maps />
        </div>
    );
};

export default Home;