import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from '../UserAvatar/UserAvatar';
import thencoLogo from '../../common/assets/images/thenco-logo.png';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <img
          src={thencoLogo}
          alt='thenco logo'
          className='nav__logo-img'
        />
      </div>
      <div className='nav__link'>
        <Link>
          <div className='nav__link-item'>about thenco</div>
        </Link>
        <UserAvatar />
      </div>
    </nav>
  );
}
