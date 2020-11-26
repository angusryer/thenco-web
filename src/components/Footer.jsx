import React from "react";
import thencoLogoBlack from '../common/assets/images/thenco-logo-black.png';
import thencoLogoWhite from '../common/assets/images/thenco-logo-white.jpg';

const theme = {
  value: 'dark'
}

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img
          src={(theme.value === 'dark') ? thencoLogoWhite : thencoLogoBlack}
          alt='thenco logo'
          className='footer__logo-img'
        />
      </div>
    </footer>
  );
}
