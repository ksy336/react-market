import * as React from 'react';
import {useState} from "react";
import deleteIcon from '../../../../assets/images/delete.svg';
import plusIcon from '../../../../assets/images/minus.png';
import minusIcon from '../../../../assets/images/plus.png';
import { IHeadPhone } from '../../../shopping-catalog/shoppingCatalog-types';
import { Space, Spin } from 'antd';
import './CartItem.css';
import {useTranslation} from "react-i18next";

const CartItem = ({
  item,
  id,
  cartItems,
  price,
  setDifferentValue,
  numberOfItems,
  setDifferentNumber
}: any) => {
  const [deletedItems, setDeletedItems] = useState(false);
  const { t } = useTranslation();

  const deleteHandler = () => {
    setDeletedItems(true);
    const filteredCartItems = cartItems.filter((item: IHeadPhone) => item.id !== id);
    setDifferentValue(filteredCartItems);
    setDeletedItems(false);
    setDifferentNumber(1);
  };
  const deleteItemHandler = () => {
    if (numberOfItems === 0) {
      return;
    }
    setDifferentValue((cartItems: IHeadPhone[]) => {
      return cartItems?.map((product: IHeadPhone) => {
        if(product.id === id) {
          return {
            ...product,
            count: item.count - 1 > 1 ? item.count - 1 : 1,
            totalPrice: (item.count - 1 > 1 ? --item.count : 1) * Number(product.price)
          }
        }
        return product;
      })
    })
  };
  const plusItemHandler = () => {
    setDifferentValue((cartItems: IHeadPhone[]) => {
      return cartItems?.map((product: IHeadPhone) => {
        if(product.id === id) {
          return {
            ...product,
            count: ++item.count,
            totalPrice: item.count * Number(product.price)
          }
        }
        return product;
      })
    })
  };

  return (
    <>
      {deletedItems && (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </Space>
        </Space>
      )}
      <div className="cart-content">
        <div className="cart-first">
          <div className="image">
            <img src={`${item.img}`} alt="it is a headphones image" />
          </div>
          <div className="title title-cart">
            <span>{item.title}</span>
            <div className="price">
              <span className="price-grey">{item.price} ???</span>
            </div>
          </div>
          <div className="delete-icon" onClick={deleteHandler}>
            <img src={deleteIcon} alt="delete icon" />
          </div>
        </div>
        <div className="amount-all">
          <div className="amount">
            <div className="plus" onClick={deleteItemHandler}>
              <img src={plusIcon} width="35" height="30" alt="plus" />
            </div>
            <div className="amount-number">
              <span>{item.count}</span>
            </div>
            <div
              className="minus"
              onClick={plusItemHandler}
            >
              <img src={minusIcon} width="35" height="30" alt="minus" />
            </div>
          </div>
          <div className="price price-all">
            <span>{item.totalPrice} ???</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
