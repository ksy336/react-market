import * as React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { IHeadPhone } from '../shopping-catalog/shoppingCatalog-types';
import Card from '../shopping-catalog/components/Card/Card';

const SingleCartView = () => {
  const singleCartItem = useSelector((state: RootState) => state.cart.singleItem);
  return (
    <>
      <Header />
      <div className="main-info">
        <BreadCrumbs />
        <div className="main-info-blocks">
          {singleCartItem?.map((item: IHeadPhone) => (
            <Card id={item.id} key={item.id} img={item?.img} title={item?.title} price={item?.price} rate={item?.rate} />
          ))}
          <div className="info-about-headphones">
            <p>Наушники — это активное шумоподавление для иммерсивного звука и комфорт от использования целый день.
              Прозрачный режим, в котором слышно окружающий мир.
              Защита от пота и воды. Мягкие вкладыши трёх размеров в комплекте для индивидуальной фиксации наушников.
              <ul>Основные характеристики:</ul>
              <li>Функция активного шумоподавления блокирует внешние шумы, чтобы вы могли полностью погрузиться в музыку</li>
              <li>Прозрачный режим позволяет слышать окружающий мир</li>
              <li>Технология пространственного аудио с функцией динамического отслеживания движений головы создаёт по‑настоящему живую и объёмную картину звука</li>
              <li>Адаптивный эквалайзер автоматически подстраивает звучание персонально под вас</li>
              <li>Мягкие силиконовые вкладыши с конической полостью; три размера на выбор</li>
              </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleCartView;
