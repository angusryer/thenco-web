import React from "react";
import { Link } from "gatsby";
import UserAvatar from "./UserAvatar";
import { styled } from 'styled-components'
import thencoLogoBlack from "../common/assets/images/thenco-logo-black.png";
import thencoLogoWhite from "../common/assets/images/thenco-logo-white.jpg";

const theme = {
  value: "dark"
}

export default function Nav() {
  return (
    <nav>
      <div className='nav__logo'>
        <img
          src={theme.value === "dark" ? thencoLogoWhite : thencoLogoBlack}
          alt='thenco logo'
          className='nav__logo-img'
        />
      </div>
      <div className='nav__right'>
        <Link to="/about">about thenco</Link>
        <Link to="/landing">home</Link>
        <UserAvatar className='nav__link-item' />
      </div>
    </nav>
  );
}
