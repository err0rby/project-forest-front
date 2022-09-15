import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBasket, getProducts } from "../../features/shopSlice";
import Basket from "../Basket/Basket";
import ShopCard from "../ShopCard/ShopCard";
import styles from "../ShopMap/ShopMap.module.css";
import Tops from "./Tops";
import { Triangle } from 'react-loader-spinner';

const ShopMap = ({modal, setModal}) => {
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState(0)
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
    <div className={styles.body}>
      <div className={open ? styles.basket_active : styles.basket}>
        <img src='https://cdn.icon-icons.com/icons2/2093/PNG/512/garbage_truck_recycling_truck_trash_truck_transportation_automobile_vehicle_icon_128560.png' className={open ? styles.btn_active : styles.btn} onClick={() => setOpen(!open)}></img>
        <Basket sum={sum} setSum={setSum} modal={modal} setModal={setModal}/>
      </div>
      <div className={open ? styles.bs_active : styles.bs}>
      <Tops />
      <div className={styles.main}>
        {products.map((item) => {
          return <ShopCard sum={sum} setSum={setSum} product={item} userId={userId} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default ShopMap;
