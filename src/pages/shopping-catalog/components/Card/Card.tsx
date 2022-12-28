import React from 'react';
import star from '../../../../assets/images/Vector.svg';
import { IHeadPhone } from '../Cards/Cards-types';
import { useDispatch } from 'react-redux';
import { addItems, updateTotalAmount } from '../../../../store/cartSlice';
import './Card.css';

const Card = ({ id, price, img, rate, title }: IHeadPhone) => {
  // const cartCtx = useContext(CartContext);
  // const addItem = () => {
  //   cartCtx.addItem({id: id, price: price, img: img, rate: rate, title: title});
  // };
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addItems({ id, price, img, rate, title }));
    dispatch(updateTotalAmount(price));
  };
  // console.log(cartCtx.items);
  return (
    <>
      <div className="card-content">
        <div className="card-image">
          <img src={`${img}`} alt="it is a headphones image" />
        </div>
        <div className="title">
          <span>{title}</span>
          <div className="price">
            <span>{price} ₽</span>
          </div>
        </div>
        {id === '1' && <span className="old-price">3527 ₽</span>}

        <div className="rate">
          <img src={star} alt="it is rating image" />
          <span>{rate}</span>
          <div className="buy-button">
            <span className="buy-click" onClick={addItem}>
              Купить
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;