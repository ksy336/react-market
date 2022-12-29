import * as React from 'react';
import deleteIcon from '../../../../assets/images/delete.svg';
import plusIcon from '../../../../assets/images/minus.png';
import minusIcon from '../../../../assets/images/plus.png';
import { removeTotalAmount, removeItem } from '../../../../store/cartSlice';
import { useDispatch } from 'react-redux';
import './CartItem.css';
import {IHeadPhone} from "../../../shopping-catalog/shoppingCatalog-types";

const CartItem = ({ id, img, title, price, cartItems, amount }: any) => {
  console.log(cartItems)
  const dispatch = useDispatch();
  const deleteHandler = () => {
    // dispatch(removeItem(id));
    console.log("hello")
    cartItems= cartItems.filter((item: IHeadPhone) => item.id !== id);
    console.log(cartItems);
    // dispatch(removeTotalAmount(price));
    // state.totalAmount = state.totalAmount - action.payload;
  };
  return (
    <>
      <div className="cart-content">
        <div className="cart-first">
          <div className="image">
            <img src={`${img}`} alt="it is a headphones image" />
          </div>
          <div className="title title-cart">
            <span>{title}</span>
            <div className="price">
              <span className="price-grey">{price} ₽</span>
            </div>
          </div>
          <div className="delete-icon" onClick={deleteHandler}>
            <img src={deleteIcon} alt="delete icon" />
          </div>
        </div>
        <div className="amount-all">
          <div className="amount">
            <div className="plus">
              <img src={plusIcon} width="35" height="30" alt="plus" />
            </div>
            <div className="amount-number">
              <span>1</span>
            </div>
            <div className="minus">
              <img src={minusIcon} width="35" height="30" alt="minus" />
            </div>
          </div>
          <div className="price price-all">
            <span>{price} ₽</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
