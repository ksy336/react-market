import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/QPICK.svg';
import heart from '../../assets/images/heart.svg';
import cart from '../../assets/images/cart.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import './Header.css';

const Header = () => {
  // const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.cart.items);
  const numberOfItems = items.length;
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
