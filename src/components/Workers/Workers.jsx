import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Workers/Workers.module.css";
import { fetchWorkers } from "../../features/workersSlice";

const Workers = () => {
  const workers = useSelector((state) => state.workersSlice.workers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkers());
  }, [dispatch]);

  return (
    <div className={styles.container_workers}>
      <div className={styles.cards_workers}>
        {workers.map((item) => {
          return (
            <div className={styles.worker_card}>
              <div className={styles.worker_card_image}>
                <img src={`http://localhost:3013/img/${item.image}`} alt="" />
              </div>
              <div className={styles.worker_card_info}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.post}>{item.post}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default Workers;
