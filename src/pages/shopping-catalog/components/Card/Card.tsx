import * as React from 'react';
import star from '../../../../assets/images/Vector.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItems, updateTotalAmount, getSingleCartItem } from '../../../../store/cartSlice';
import openNotification from '../../../../helpers/notification';
import './Card.css';
import { useTranslation } from 'react-i18next';
import CartItem from '../../../shopping-cart/components/CartItem/CartItem';

const Card = ({ id, price, img, rate, title, count, setItemsToLocalStorage, totalAmount, setTotalAmount }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const addItem = () => {
    dispatch(addItems({ id, price, img, rate, title }));
    setItemsToLocalStorage((prev: any) => [...prev, { id, price, img, rate, title }]);
    dispatch(updateTotalAmount(price));
    setTotalAmount((prev: number) => (totalAmount = prev + Number(price)));
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
      <div className="card-content">
        <div onClick={getSingleCart}>
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
        </div>
        <div className="rate">
          <img src={star} alt="it is rating image" />
          <span>{rate}</span>
          <div className="buy-button">
            <span className="buy-click" onClick={addItem}>
              {t('buy')}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
