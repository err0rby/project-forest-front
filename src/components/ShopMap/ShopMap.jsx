import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBasket, getProducts } from "../../features/shopSlice";
import Basket from "../Basket/Basket";
import ShopCard from "../ShopCard/ShopCard";
import styles from "../ShopMap/ShopMap.module.css";
import Tops from "./Tops";

const ShopMap = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.shopSlice.products);
  const userId = useSelector(state => state.applicationSlice.name)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(fetchBasket({userId}))
  }, [dispatch, userId]);

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
