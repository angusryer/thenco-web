import React from "react";
import './Footer.scss';
import thencoLogo from '../../common/assets/images/thenco-logo.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img
          src={thencoLogo}
          alt='thenco logo'
          className='footer__logo-img'
        />
      </div>
    </footer>
  );
}
