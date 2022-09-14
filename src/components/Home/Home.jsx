import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComms, fetchComms } from '../../features/commentSlice';
import { fetchRequest } from '../../features/requestSlice';
import style from './Home.module.css'

const Home = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(state => state.applicationSlice.name);
    const request = useSelector(state => state.requestSlice.requests);
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