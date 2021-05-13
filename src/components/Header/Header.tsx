import React from 'react';
import classes from './Header.module.css';
import c from '../../App.module.css';
import logo from '../../icons/logo.png';
import notificationHeader from '../../icons/notificationHeader.png';
import musicHeader from '../../icons/musicHeader.png';
import menuHeader from '../../icons/menuHeader.png';
import search from '../../icons/search.png';

export const Header = () => {
  return (
    <div className={classes.header}>
      <div className={c.container}>
        <div className={classes.logo}>
          <img src={logo} alt="" /> MaximumVK
        </div>
        <div className={classes.search}>
          <img src={search} alt="" />
          <input className={classes.inputSearch} type="text"></input>
        </div>
        <div className={classes.notification}>
          <img src={notificationHeader} alt="" />
        </div>
        <div className={classes.audio}>
          <img src={musicHeader} alt="" />
        </div>
        <div className={classes.player}></div>
        <div className={classes.profileMenu}>
          <div className={classes.name}>Max</div>
          <div className={classes.profImg}></div>
          <div className={classes.hedProfMenu}>
            <img src={menuHeader} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
