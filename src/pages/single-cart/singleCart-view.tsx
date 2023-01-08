import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { IHeadPhone } from '../shopping-catalog/shoppingCatalog-types';
import Card from '../shopping-catalog/components/Card/Card';

const SingleCartView = ({ itemsToLocalStorage, setItemsToLocalStorage, t }: any) => {
  const singleCartItem = useSelector((state: RootState) => state.cart.singleItem);
  return (
    <>
      <Header itemsToLocalStorage={itemsToLocalStorage} />
      <div className="main-info">
        <BreadCrumbs />
        <div className="main-info-blocks wrapper">
          {singleCartItem?.map((item: IHeadPhone) => (
            <Card
              id={item.id}
              key={item.id}
              img={item?.img}
              title={item?.title}
              price={item?.price}
              rate={item?.rate}
              setItemsToLocalStorage={setItemsToLocalStorage}
            />
          ))}
          <div className="info-about-headphones">
            <p>{t('headphonesText')}</p>
            <ul>{t('mainCharacteristics')}</ul>
            <li>{t('music')}</li>
            <li>{t('transparent')}</li>
            <li>{t('technology')}</li>
            <li>{t('adaptive')}</li>
            <li>{t('eartips')}</li>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleCartView;
