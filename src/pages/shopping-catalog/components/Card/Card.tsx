import * as React from 'react';
import star from '../../../../assets/images/Vector.svg';
import { IHeadPhone } from '../Cards/Cards-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItems, updateTotalAmount, getSingleCartItem } from '../../../../store/cartSlice';
import openNotification from '../../../../helpers/notification';
import './Card.css';

const Card = ({ id, price, img, rate, title }: IHeadPhone) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addItems({ id, price, img, rate, title }));
    dispatch(updateTotalAmount(price));
    try {
      openNotification('bottomRight', 'success', 'Товар добавлен в корзину');
    } catch (e) {
      openNotification('bottomRight', 'error', 'Произошла ошибка! Попробуйте снова');
    }
  };
  const getSingleCart = () => {
    localStorage.setItem('cartId', String(id));
    dispatch(getSingleCartItem({ id, price, img, rate, title }));
    navigate('/single-cart', { replace: true });
  };
  return (
    <>
      <div className="card-content" onClick={getSingleCart}>
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
