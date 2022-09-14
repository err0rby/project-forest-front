import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/shopSlice";
import ShopCard from "../ShopCard/ShopCard";
import styles from "../ShopMap/ShopMap.module.css"
import Tops from "./Tops";

const ShopMap = () => {
  const products = useSelector((state) => state.shopSlice.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
  <div>
    <Tops/>
    <div className={styles.main}>
    {products.map((item) => {
        return (
            <ShopCard product={item}/>

        )
    })}
  </div>
  </div>
  ) 
};

export default ShopMap;
