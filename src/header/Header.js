import React from 'react';
import './Header.css';
import MenuButton from './menu_button/MenuButton.js';
import Logo from './logo_banner/Logo.js';
import Account from './account/Account.js';

const Header = () => {
  return (
    <header className="header">
        <MenuButton />
        <Logo />
        <Account />
    </header>
  );
};

export default Header;

