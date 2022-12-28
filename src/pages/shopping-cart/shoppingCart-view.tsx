import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { IHeadPhone } from '../shopping-catalog/components/Cards/Cards-types';
import CartItem from './components/CartItem/CartItem';
import './shoppingCart.css';

const ShoppingCartView = ({ cartItems, amount }: any) => {
  return (
    <>
      <Header />
      <div className="cart-shop-container wrapper">
        <span className="cart-heading">Корзина</span>
        <div className="cart-shop-content">
          <div className="cards-item-content">
            {cartItems?.map((item: IHeadPhone) => {
              return <CartItem key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate} />;
            })}
          </div>
          <div className="button-block">
            <div className="button-container">
              <div className="button-text">
                <span>ИТОГО</span>
                <span>₽ {amount}</span>
              </div>
              <button>Перейти к оформлению</button>
            </div>
          </div>
        </div>
      </div>

      {/*<Cards headphones={headphones} />*/}
      <Footer />
    </>
  );
};
export default ShoppingCartView;
