import React from "react";
import styles from "../BeforeAfter/BeforeAfter.module.css";
import "../../index.css";

const BeforeAfter = () => {
  function before() {
    document.getElementById("kobavenusab").style.width =
      document.getElementById("pedsumid").value + "%";
  }
  return (
    <div className={styles.gallery_img}>
      <div className="slayden-savnena">
        <figure>
          <div id="kobavenusab"></div>
        </figure>
        <input
          onInput={before}
          onChange={before}
          type="range"
          min="0"
          max="100"
          value="50"
          id="pedsumid"
        />
      </div>
    </div>
  );
};

export default BeforeAfter;
