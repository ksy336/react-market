import * as React from 'react';
import { IHeadPhone } from './Cards-types';
import Card from '../Card/Card';
import './Cards.css';


const Cards = ({ headphones, setItemsToLocalStorage, itemsToLocalStorage, t }: any) => {
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
                totalPrice={item?.totalPrice}
                rate={item?.rate}
                count={item?.count}
                setItemsToLocalStorage={setItemsToLocalStorage}
                itemsToLocalStorage={itemsToLocalStorage}
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
                totalPrice={item?.totalPrice}
                itemsToLocalStorage={itemsToLocalStorage}
                setItemsToLocalStorage={setItemsToLocalStorage}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
export default Cards;
