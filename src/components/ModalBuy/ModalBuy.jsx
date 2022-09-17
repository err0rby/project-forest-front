import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllBasket } from "../../features/shopSlice";
import "./ModalBuy.css";

const ModalBuy = ({ modal, setModal }) => {
    const userId = useSelector(state => state.applicationSlice.name)
    const dispatch = useDispatch()

    function handleRemoveBasket(e){
        e.preventDefault();
        dispatch(removeAllBasket({userId}))
        setModal(false)
    }

  return (
    <div
      className={modal ? "buy_cont active" : "buy_cont"}
      onClick={() => setModal(false)}
    >
      <div
        className={modal ? "form active" : "form"}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleRemoveBasket}>
            <div className="input_text">
                <input type="text" name="" id="" placeholder="Введите ваше имя" />
                <input type="email" name="" id="" placeholder="Введите eamil" />
                <input type="tel" name="" id="" placeholder="Введите номер телефона" />
            </div>
          <div className="input">
            <input type="radio" id="radio-1" name="radio" />
            <label for="radio-1">
              <i class="fa fa-cc-paypal" aria-hidden="true"></i>
            </label>

            <input type="radio" id="radio-2" name="radio" />
            <label for="radio-2">
              <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
            </label>

            <input type="radio" id="radio-3" name="radio" />
            <label for="radio-3">
              <i class="fa fa-cc-visa" aria-hidden="true"></i>
            </label>
          </div>
          <button >Оформить заказ</button>
        </form>
      </div>
    </div>
  );
};

export default ModalBuy;
