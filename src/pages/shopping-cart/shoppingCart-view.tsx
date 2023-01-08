import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { IHeadPhone } from '../shopping-catalog/components/Cards/Cards-types';
import CartItem from './components/CartItem/CartItem';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Modal from '../../components/Modal/Modal';
import { Input } from 'antd';
import { UserOutlined, PhoneOutlined } from '@ant-design/icons';
import './shoppingCart.css';
import Button from '../../components/Button/Button';

const ShoppingCartView = ({
  cartItems,
  amount,
  setDifferentValue,
  setDifferentAmount,
  numberOfItems,
  setNumberOfItems,
  setDifferentNumber,
  setTotalAmount,
  showModal,
  showModalHandler,
  hideModalHandler,
  handleSubmit,
  formSubmit,
  register,
  errors,
  setName,
  setPhone,
  t,
}: any) => {
  return (
    <>
      {showModal && (
        <Modal onConfirm={hideModalHandler}>
          <header className="header-modal header-category">{t('ordering')}</header>
          <form className="form-category" onSubmit={handleSubmit(formSubmit)}>
            <h2>{t('delivery')}</h2>
            <div className="input-for-name">
              <Input
                size="large"
                placeholder={t('name')}
                prefix={<UserOutlined />}
                {...register('name', {
                  onChange: (e: any) => {
                    setName(e.target.value);
                  },
                  required: false,
                })}
              />
            </div>
            {errors?.name && <p className="text-invalid">{errors?.name?.message || 'Error'}</p>}
            <div className="input-for-phone">
              <Input
                placeholder={t('phone')}
                size="large"
                prefix={<PhoneOutlined />}
                {...register('phone', {
                  onChange: (e: any) => {
                    setPhone(e.target.value);
                  },
                  required: false,
                })}
              />
            </div>
            {errors?.phone && <p className="text-invalid">{errors?.phone?.message || 'Error'}</p>}
            <div className="buttons-for-submit">
              <div className="button-category-submit">
                <Button type="submit">{t('order')}</Button>
              </div>
              <Button onClick={hideModalHandler}>{t('cancel')}</Button>
            </div>
          </form>
        </Modal>
      )}
      <Header itemsToLocalStorage={cartItems} />
      <BreadCrumbs />
      <div className="cart-shop-container wrapper">
        <span className="cart-heading">{t('cart')}</span>
        <div className="cart-shop-content">
          <div className="cards-item-content">
            {cartItems?.map((item: IHeadPhone) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  rate={item.rate}
                  count={item.count}
                  cartItems={cartItems}
                  amount={amount}
                  setDifferentValue={setDifferentValue}
                  setDifferentAmount={setDifferentAmount}
                  setNumberOfItems={setNumberOfItems}
                  numberOfItems={numberOfItems}
                  setDifferentNumber={setDifferentNumber}
                  setTotalAmount={setTotalAmount}
                />
              );
            })}
          </div>
          <div className="button-block">
            <div className="button-container">
              <div className="button-text">
                <span>{t('total')}</span>
                <span>₽ {Math.abs(amount)}</span>
              </div>
              <button className="button" onClick={showModalHandler}>
                {t('checkout')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ShoppingCartView;
