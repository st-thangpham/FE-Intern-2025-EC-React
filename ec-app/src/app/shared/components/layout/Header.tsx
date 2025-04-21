import React from 'react';
import { Link } from 'react-router-dom';

import MonitoLogo from '../../../../assets/imgs/monito-logo.png';
import SearchIcon from '../../../../assets/icons/icon_search.svg';
import CartIcon from '../../../../assets/icons/icon-cart.svg';
import CurrencyFlag from '../../../../assets/icons/icon-flag.svg';
import DownIcon from '../../../../assets/icons/icon-down.svg'
import CartBadge from '../components/Cartbadge';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-nav'>
          <h2 className='header-logo'>
            <Link to='/' title='Homepage'>
              <img
                className='logo-img'
                src={MonitoLogo}
                alt='Monito Logo Image'
              />
            </Link>
          </h2>
          <nav className='navigation'>
            <ul className='list-nav'>
              <li className='list-item'>
                <Link className='nav' to='/'>
                  Home
                </Link>
              </li>
              <li className='list-item'>
                <Link className='nav' to='/'>
                  Category
                </Link>
              </li>
              <li className='list-item'>
                <Link className='nav' to='/'>
                  About
                </Link>
              </li>
              <li className='list-item'>
                <Link className='nav' to='/'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='header-action'>
          <form className='form form-search'>
            <img src={SearchIcon} alt='Search Icon' />
            <input
              type='text'
              placeholder='Search something here!'
              name='Search'
            />
          </form>

          <div className='header-btn'>
            <button type='button' className='btn btn-primary'>
              Join the community
            </button>
          </div>

          <div className='header-cart'>
            <Link to='/cart'>
              <img src={CartIcon} alt='Cart Icon' />
              <CartBadge />
            </Link>
          </div>

          <div className='switcher-currency'>
            <img src={CurrencyFlag} alt='Currency Flag' />
            <span className='currency'>VND</span>
            <img src={DownIcon} alt='Down Arrow' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
