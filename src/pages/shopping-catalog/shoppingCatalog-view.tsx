import * as React from 'react';
import Header from '../../components/Header/Header';
import Cards from './components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import { IHeadphones } from './shoppingCatalog-types';

const ShoppingCatalogView = ({ headphones }: IHeadphones) => {
  return (
    <>
      <Header />
      <Cards headphones={headphones} />
      <Footer />
    </>
  );
};
export default ShoppingCatalogView;
