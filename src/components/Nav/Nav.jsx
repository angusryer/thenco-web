import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar/UserAvatar";
import thencoLogoBlack from "../../common/assets/images/thenco-logo-black.png";
import thencoLogoWhite from "../../common/assets/images/thenco-logo-white.jpg";
import "./Nav.scss";

const theme = {
  value: "dark"
};

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <img
          src={theme.value === "dark" ? thencoLogoWhite : thencoLogoBlack}
          alt='thenco logo'
          className='nav__logo-img'
        />
      </div>
      <div className='nav__right'>
        <Link className='nav__link-item'>about thenco</Link>
        <UserAvatar className='nav__link-item' />
      </div>
    </nav>
  );
}
