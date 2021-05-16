import React from 'react';
import classes from './Header.module.css';
import c from '../../App.module.css';
import logo from '../../icons/logo.png';
import notificationHeader from '../../icons/notificationHeader.png';
import musicHeader from '../../icons/musicHeader.png';
import menuHeader from '../../icons/menuHeader.png';
import search from '../../icons/search.png';

export const Header = () => {
  let a =
    'https://sun9-66.userapi.com/impg/m7RidxNg9emTxuj-6y8wl_kg9-tI8lew1H46Vg/txbBAzSr2Ok.jpg?size=1623x2160&quality=96&sign=d03e2fb7a22ca2a7751f8641203ffa02&type=album';
  let url = `url(${a})`;
  return (
    <div className={classes.header}>
      <div className={c.container}>
        <div className={classes.logo}>
          <img src={logo} alt="" /> MaximumVK
        </div>
        <div className={classes.search}>
          <img src={search} alt="" />
          <input
            className={classes.inputSearch}
            type="text"
            placeholder="Поиск"
          ></input>
        </div>
        <div className={classes.notification}>
          <img src={notificationHeader} alt="" />
        </div>
        <div className={classes.audio}>
          <img src={musicHeader} alt="" />
        </div>
        <div className={classes.player}></div>
        <div className={classes.profileMenu}>
          <div className={classes.name}>Макс</div>
          <div
            className={classes.profImg}
            style={{ backgroundImage: url }}
          ></div>
          <div className={classes.hedProfMenu}>
            <img src={menuHeader} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
