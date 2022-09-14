import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasket, removeFromBasket } from '../../features/shopSlice';

const Basket = () => {

    const basket = useSelector(state => state.shopSlice.basket)
    const userId = useSelector(state => state.applicationSlice.name)
    console.log(basket);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBasket({userId}))
    }, [dispatch, userId])

    function handleRemoveFromBasket(productId, product){
        dispatch(removeFromBasket({ userId, productId, product }))
    }

    return (
        <div>
            {basket.map((product, index) => {
                return (
                <div key={index}>{product.name} <button onClick={() => handleRemoveFromBasket(product._id, product)}>x</button> </div>
                
                )
            })}
        </div>
    );
};

export default Basket;