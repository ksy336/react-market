import * as React from 'react';
import {useEffect, useState} from "react";
import ShoppingCartView from './shoppingCart-view';
import { useForm } from 'react-hook-form';
import openNotification from '../../helpers/notification';
import { useTranslation } from 'react-i18next';

const ShoppingCartContainer = ({
  itemsToLocalStorage,
  totalAmount,
  setDifferentValue,
  setDifferentAmount,
  numberOfItems,
  setNumberOfItems,
  setDifferentNumber,
  setTotalAmount,
}: any) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const hideModalHandler = () => {
    setShowModal(false);
  };

  const formSubmit = () => {
    try {
      reset();
      setShowModal(false);
      openNotification('topRight', 'success', `Спасибо, ${name} за заказ! Мы с вами свяжемся по телефону ${phone}.`);
    } catch (e) {
      openNotification('topRight', 'error', 'Произошла ошибка. Повторите снова.');
    }
  };
  const showModalHandler = () => {
    setShowModal(true);
  };
  return (
    <ShoppingCartView
      cartItems={itemsToLocalStorage}
      amount={totalAmount}
      setDifferentValue={setDifferentValue}
      setDifferentAmount={setDifferentAmount}
      setNumberOfItems={setNumberOfItems}
      numberOfItems={numberOfItems}
      setDifferentNumber={setDifferentNumber}
      setTotalAmount={setTotalAmount}
      showModal={showModal}
      hideModalHandler={hideModalHandler}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      setName={setName}
      formSubmit={formSubmit}
      setPhone={setPhone}
      showModalHandler={showModalHandler}
      t={t}
    />
  );
};
export default ShoppingCartContainer;
