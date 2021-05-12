import React from 'react';
import logo from '../icons/logo.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" /> MaximumVK
        </div>
        <div className="search">
          <input className="inputSearch" type="text"></input>
        </div>
        <div className="notification"></div>
        <div className="audio"></div>
        <div className="player"></div>
        <div className="profileMenu"></div>
      </div>
    </div>
  );
};
