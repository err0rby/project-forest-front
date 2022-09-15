import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBasket, getProducts } from "../../features/shopSlice";
import Basket from "../Basket/Basket";
import ShopCard from "../ShopCard/ShopCard";
import styles from "../ShopMap/ShopMap.module.css";
import Tops from "./Tops";
import { Triangle } from 'react-loader-spinner';

const ShopMap = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.shopSlice.products);
  const userId = useSelector(state => state.applicationSlice.name)
  const dispatch = useDispatch();
  const loading = useSelector(state => state.shopSlice.loading);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchBasket({ userId }))
  }, [dispatch, userId]);

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
    <div>
      <Tops />
      <button onClick={() => setOpen(!open)}>Корзина</button>
      <div className={styles.main}>
        {products.map((item) => {
          return <ShopCard product={item} userId={userId} />;
        })}
        {open ? (
          <div className={styles.basket}>
            <Basket />
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default ShopMap;
