import styles from "../AboutUs/AboutUs.module.css";
import Workers from "../Workers/Workers";
import Aos from "aos";
import imgs from "../AboutUs/img/photo.jpg"
import { useEffect } from "react";

const AboutUs = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
    
  return (
    <div>
      <div className={styles.head}>
        <div className={styles.text}>
          <h1>О нас</h1>
        </div>
        <div className={styles.text2}>
          <p>информация о кампании</p>
        </div>
      </div>
      <div className={styles.AboutUs}>
        <div data-aos='zoom-in' className={styles.One}>
            <div className={styles.Title}>
              <h2>Ландшафтный Дизайн Forest</h2>
            </div>
            <div className={styles.Text}>
              <p>The Landscape - это ландшафтная компания с полным спектром услуг с простой и уникальной философией проектирования и строительства. Мы верим в то, что один ландшафтный дизайнер справится с работой от ее концепции на бумаге до реализации на вашей территории. Причина в том, что, делая это, вы получаете возможность общаться и работать с одним человеком, с которым вы можете поделиться своими мыслями и идеями, чтобы воплотить их в жизнь в сотрудничестве. Ландшафтный дизайнер состоит из группы высококвалифицированных специалистов по ландшафтному дизайну, которые уделяют много внимания мелким деталям.</p>
            </div>
        </div>
        <div data-aos='zoom-in' className={styles.Two}>
            <div><img src={imgs} alt="q" /></div>
        </div>
      </div>
      <div className={styles.main_info}>
      <div className={styles.info}>
        <div data-aos='fade-right' className={styles.blocks1}>
            <div className={styles.infs}>
                <div className={styles.kub}><h1>1978</h1></div>
                <div className={styles.title1}><h4>Компания основана</h4></div>
            </div>
            <div className={styles.text1}><p>Почти четыре десятилетия назад мы начинали как компания с двумя сотрудниками. Вскоре к команде присоединился ландшафтный дизайнер, и с этого момента мы начали быстро расти.</p></div>
        </div>
        <div data-aos='fade-up' className={styles.blocks1}>
            <div className={styles.infs}>
                <div className={styles.kub}><h1>1997</h1></div>
                <div className={styles.title1}><h4>Второе Местоположение</h4></div>
            </div>
            <div className={styles.text1}><p>В последние годы мы росли очень быстро, поэтому в 1997 году мы открыли второе заведение. Новое место началось с пяти новых ландшафтных дизайнеров.</p></div>
        </div> 
        <div data-aos='fade-left' className={styles.blocks1}>
            <div className={styles.infs}>
                <div className={styles.kub}><h1>2015</h1></div>
                <div className={styles.title1}><h4>Всего получено 19 наград</h4></div>
            </div>
            <div className={styles.text1}><p>До 2015 года мы несколько раз номинировались и получили в общей сложности 12 наград за ландшафтный дизайн. Мы очень гордимся этим достижением.</p></div>
        </div>
      </div>
      </div>
      <div className={styles.block}>
        <div className={styles.Title2}><h5>Наши работники</h5></div>
      </div>
      <div>
        <Workers/>
      </div>
    </div>
  );
};

export default AboutUs;
