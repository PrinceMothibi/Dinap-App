import React from 'react';
import MenuButton from './menu_button/MenuButton.js';
import Logo from './logo_banner/Logo.js';
import Account from './account/Account.js';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <MenuButton />
        <Logo />
        <Account />
      </div>
    </header>
  );
};

export default Header;

