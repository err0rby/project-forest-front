import { Link } from "react-router-dom";
import styles from "../Headers/Headers.module.css";
import logo_home from "../Headers/img/home.png"
import logo_telephone from "../Headers/img/telephone.png"
import logo_time from "../Headers/img/time.png"
import logo_telegram from "../Headers/img/telegram.png"
import logo_whatsapp from "../Headers/img/whatsapp.png"

const Headers = () => {
  return (
    <div className={styles.headers}>
      <div className={styles.first_Head}>
        <div className={styles.oneBlock}>
          <div className={styles.text}>
            <p>Providing Exceptional Landscaping</p>
          </div>
          <div className={styles.twoBlock}>
            <div className={styles.text}>
              <div>
                <img
                  src={logo_home}
                  alt="q"
                />
              </div>
              <p>202 Park Avenue, New York City</p>
            </div>
            <div className={styles.slesh}> / </div>
            <div className={styles.text}>
              <div>
                <img
                  src={logo_telephone}
                  alt="q"
                />
              </div>
              <p>+123 - 777 - 456 - 789</p>
            </div>
            <div className={styles.slesh}> / </div>
            <div className={styles.text}>
              <div>
                <img
                  src={logo_time}
                  alt="q"
                />
              </div>
              <p>Mon-Sat: 07:00 - 17:00</p>
            </div>
            <div className={styles.slesh}> / </div>
            <div className={styles.text}>
              <div>
                <a target="blank" href="https://wa.me/9270303803">
                  <img
                    src={logo_whatsapp}
                    alt="q"
                  />
                </a>
              </div>
              <div>
                <a target="blank" href="https://t.me/tlandf">
                  <img
                    src={logo_telegram}
                    alt="q"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.second_Head}>
        <div className={styles.BlocksOne}>
            <div className={styles.hedImg}>
            <Link to="/"> <img
            src="https://demos.qreativethemes.com/thelandscaper/wp-content/uploads/sites/2/2015/07/logo.png"
            alt="q" /> </Link>
            </div>
            </div>
        <div className={styles.BlocksTwo}>
            <Link to="/" className={styles.linkText}> <h4>Главная</h4> </Link>
            <Link to="/products" className={styles.linkText}> <h4>Магазин</h4> </Link>
            <Link to="/service" className={styles.linkText}> <h4>Сервисы</h4> </Link>
            <Link to="/" className={styles.linkText}> <h4>До/После</h4> </Link>
            <Link to="/" className={styles.linkText}> <h4>О нас</h4> </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;