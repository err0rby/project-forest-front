import { Link, useNavigate } from "react-router-dom";
import styles from "../Headers/Headers.module.css";
import logo_home from "../Headers/img/home.png"
import logo_telephone from "../Headers/img/telephone.png"
import logo_time from "../Headers/img/time.png"
import logo_telegram from "../Headers/img/telegram.png"
import logo_whatsapp from "../Headers/img/whatsapp.png"
import logoFirm from "../Headers/img/logo.png"
import { useSelector } from "react-redux";

const Headers = () => {
  const name = useSelector(state => state.applicationSlice.name);
  const token = useSelector(state => state.applicationSlice.token);
  const navigate = useNavigate();

  const handleClean = () => {
    localStorage.clear()
    window.location.reload()
  }

  const handleLin = () => {
    navigate('/signin')
  }

  const handleLog = () => {
    navigate('/signup')
  }

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
          {name === '63203a63b275658192f873c0' ? <Link to='/admin'><div><img width={35} src="https://shumoff.ua/shumoffbiz/img/icon/i1.png" alt="asdasd" /></div></Link> : null}
        </div>
        {token ? <div className={styles.just}><button onClick={handleClean}>Выход</button></div> : <div className={styles.just}><button onClick={handleLin}>Вход</button><button onClick={handleLog}>Регистрация</button></div>}
      </div>
      <div className={styles.second_Head}>
        <div className={styles.BlocksOne}>
          <div className={styles.hedImg}>
            <Link to="/"> <img
              src={logoFirm}
              alt="q" /> </Link>
          </div>
        </div>
        <div className={styles.BlocksTwo}>
          <Link to="/" className={styles.linkText}> <h4>Главная</h4> </Link>
          <Link to="/products" className={styles.linkText}> <h4>Магазин</h4> </Link>
          <Link to="/service" className={styles.linkText}> <h4>Сервисы</h4> </Link>
          <Link to="/beforeafter" className={styles.linkText}> <h4>До/После</h4> </Link>
          <Link to="/workers" className={styles.linkText}> <h4>О нас</h4> </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;