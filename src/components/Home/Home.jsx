import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComms, addLike, deleteComm, deleteLike, fetchComms } from '../../features/commentSlice';
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import Slider from './Slider';
import { motion } from 'framer-motion';
import { fetchUsers } from '../../features/userSlice';

const Home = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(state => state.applicationSlice.name);
    const comments = useSelector(state => state.commentSlice.comments);
    const count = comments.length;
    const [like, setLike] = useState(true);
    const users = useSelector(state => state.userSlice.users);

    useEffect(() => {
        dispatch(fetchComms());
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleSend = () => {
        dispatch(addComms({ name, text }));
        setText('')
    }

    const handleDel = (id) => {
        dispatch(deleteComm(id))
    }

    const handleLike = (name, id) => {
        if(like){
            dispatch(addLike({name, id}));
            setLike(false);
        }
        if(!like){
            dispatch(deleteLike({name, id}));
            setLike(true);
        }
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
                <motion.div drag='x' dragConstraints={{ right: 0, left: count * -365 }} className={style.main_comments_comments}>
                    {comments.map((com) => {
                        return <motion.div className={style.card_comments} key={com._id}>
                            {users.map((user) => {
                                if(user._id === name){
                                    return <div className={style.btncom}><button onClick={() => {handleDel(com._id)}}>X</button></div>
                                }
                                return null
                            })}
                            <div className={style.card_comments1}><p>{com.user.login}</p></div>
                            <div className={style.card_comments2}><p>{com.text}</p></div>
                            <div className={style.card_like}><button onClick={() => {handleLike(name, com._id)}}>❤️</button><div>{com.likes.length}</div></div>
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
            <div className={style.main_maps}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5afe904d7ef6e953f635fb861820c3b6b68f39a8861138e3577926f1ff939aff&amp;source=constructor" width="100%" height="400px" frameborder="0"></iframe>
            </div>
        </div>
    );
};

export default Home;