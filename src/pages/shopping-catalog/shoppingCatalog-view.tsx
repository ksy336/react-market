import * as React from 'react';
import Header from '../../components/Header/Header';
import Cards from './components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

const ShoppingCatalogView = ({ headphones, setItemsToLocalStorage, itemsToLocalStorage, totalAmount, setTotalAmount, t }: any) => {
  return (
    <>
      <Header itemsToLocalStorage={itemsToLocalStorage} />
      <Cards
        headphones={headphones}
        itemsToLocalStorage={itemsToLocalStorage}
        setItemsToLocalStorage={setItemsToLocalStorage}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        t={t}
      />
      <Footer />
    </>
  );
};
export default ShoppingCatalogView;
