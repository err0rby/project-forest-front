import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from '../../features/requestSlice';

const Home = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.applicationSlice.name);
    const request = useSelector(state => state.requestSlice.requests);

    useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    return (
        <div>
            {name === "63203a63b275658192f873c0" ? <div>{request.map((req) => {
                return <div key={req._id}>
                    <div>{req.yourName}</div>
                    <div>{req.yourAddress}</div>
                    <div>{req.phoneNumber}</div>
                    <div>{req.workDescription.name}</div>
                </div>
            })}</div> : ''}
        </div>
    );
};

export default Home;