import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/QPICK.svg';
import world from '../../assets/images/RU.svg';
import vk from '../../assets/images/VK.svg';
import telegram from '../../assets/images/Telegram.svg';
import whatsupp from '../../assets/images/Whatsapp.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer wrapper">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="it is logo" />
          </div>
          <div className="nav-list">
            <div>
              <Link to="" className="links">
                Избранное
              </Link>
            </div>
            <div>
              <Link to="/cart" className="links">
                Корзина
              </Link>
            </div>
            <div>
              <Link to="" className="links last-link">
                Контакты
              </Link>
            </div>
          </div>
          <div className="nav-list-translate">
            <div>
              <Link to="" className="links link-service">
                Условия сервиса
              </Link>
            </div>
            <div className="icons">
              <span>
                <img src={world} alt="it is icon" />
              </span>
              <span>Рус</span>
              <span>Eng</span>
            </div>
          </div>
          <div className="icons-social">
            <span>
              <img src={vk} alt="it is vk icon" />
            </span>
            <span>
              <img src={telegram} alt="it is telegram icon" />
            </span>
            <span>
              <img src={whatsupp} alt="it is whatsupp icon" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
