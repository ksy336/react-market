import * as React from 'react';
import { IHeadPhone } from './Cards-types';
import Card from '../Card/Card';
import './Cards.css';
import CartItem from '../../../shopping-cart/components/CartItem/CartItem';

const Cards = ({ headphones, setItemsToLocalStorage, totalAmount, setTotalAmount, t }: any) => {
  return (
    <>
      <main className="wrapper main">
        <div className="text">
          <h1>{t('headphones')}</h1>
        </div>
        <div className="cards-container">
          {headphones?.slice(0, 6)?.map((item: IHeadPhone) => {
            return (
              <Card
                id={item.id}
                key={item.id}
                img={item?.img}
                title={item?.title}
                price={item?.price}
                rate={item?.rate}
                setItemsToLocalStorage={setItemsToLocalStorage}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            );
          })}
        </div>
        <div className="text">
          <h1>{t('pro-head')}</h1>
        </div>
        <div className="cards-container">
          {headphones?.slice(6)?.map((item: IHeadPhone) => {
            return (
              <Card
                id={item.id}
                key={item.id}
                img={item?.img}
                title={item?.title}
                price={item?.price}
                rate={item?.rate}
                count={item?.count}
                setItemsToLocalStorage={setItemsToLocalStorage}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
export default Cards;
