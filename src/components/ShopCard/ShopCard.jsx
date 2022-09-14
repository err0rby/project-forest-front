import styles from "../ShopCard/ShopCard.module.css";

const ShopCard = ( {product} ) => {
  return (
    <div className={styles.Card}>
      <div className={styles.image}>
        <img src={`http://localhost:3013/img/${product.image}`} alt="q" />
      </div>
      <div className={styles.about}>
        <div className={styles.text}> <h4>{product.name}</h4> </div>
        <div className={styles.text}> <h4>£{product.price}</h4> </div>
      </div>
      <div className={styles.Butt}>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopCard;
