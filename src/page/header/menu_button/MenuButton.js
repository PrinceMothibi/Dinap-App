import React from 'react';

const MenuButton = ({ onClick }) => {
  return (
    <button className="menu-button" onClick={onClick}>
      Menu
    </button>
  );
};

export default MenuButton;

