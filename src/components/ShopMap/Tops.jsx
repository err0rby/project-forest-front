import styles from "../ShopMap/ShopMap.module.css"

const Tops = () => {
    return (
        <div className={styles.head}>
            <div className={styles.text}> <h1>Магазин</h1> </div>
            <div className={styles.text}> <p>Лучшие продукты для вашего сада</p> </div>
        </div>
    );
};

export default Tops;