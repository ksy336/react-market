import * as React from 'react';
import Header from '../../components/Header/Header';
import Cards from './components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

const ShoppingCatalogView = ({ headphones, setItemsToLocalStorage, itemsToLocalStorage, t }: any) => {
  return (
    <>
      <Header itemsToLocalStorage={itemsToLocalStorage} />
      <Cards
        headphones={headphones}
        itemsToLocalStorage={itemsToLocalStorage}
        setItemsToLocalStorage={setItemsToLocalStorage}
        t={t}
      />
      <Footer />
    </>
  );
};
export default ShoppingCatalogView;
