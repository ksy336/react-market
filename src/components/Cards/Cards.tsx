import { IHeadphones, IHeadPhone } from './Cards-types';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ headphones }: IHeadphones) => {
  return (
    <>
      <main className="wrapper main">
        <div className="text">
          <h1>Наушники</h1>
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
              />
            );
          })}
        </div>
        <div className="text">
          <h1>Беспроводные наушники</h1>
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
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
export default Cards;
