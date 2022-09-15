import React from "react";
import "./ModalBuy.css";

const ModalBuy = ({ modal, setModal }) => {
  return (
    <div className={modal ? "buy_cont active" : "buy_cont"} onClick={() => setModal(false)}>
      <div className={modal ? "form active" : "form"} onClick={e => e.stopPropagation()}>
        <form action=""></form>
      </div>
    </div>
  );
};

export default ModalBuy;
