import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/QPICK.svg';
import heart from '../../assets/images/heart.svg';
import cart from '../../assets/images/cart.svg';
import './Header.css';

const Header = ({itemsToLocalStorage}: any) => {
  const navigate = useNavigate();
  const numberOfItems = itemsToLocalStorage.length;
  console.log(itemsToLocalStorage)
  const goToCartPage = () => {
    navigate('/cart', { replace: true });
  };
  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <header>
      <div className="wrapper header-wrapper">
        <div className="header-logo" onClick={handleClick}>
          <img src={logo} alt="it is logo" />
        </div>
        <nav className="nav">
          <div className="heart-block">
            <span>
              <img src={heart} alt="it is heart icon" />
            </span>
            <span className="heart-container">
              <span className="heart-number">0</span>
            </span>
          </div>
          <div className="cart-block" onClick={goToCartPage}>
            <span>
              <img src={cart} alt="it is shopping cart icon" />
            </span>
            <span className="cart-container">
              <span className="cart-number">{numberOfItems}</span>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
