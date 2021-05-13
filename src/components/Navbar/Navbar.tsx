import React from 'react';
import classes from './Navbar.module.css';
import home from '../../icons/free-icon-user-149452.png';
import foto from '../../icons/foto.png';
import friends from '../../icons/friends.png';
import message from '../../icons/message.png';
import music from '../../icons/music.png';
import news from '../../icons/news.png';
import video from '../../icons/video.png';
import coop from '../../icons/coop.png';
import clip from '../../icons/clip.png';
import games from '../../icons/games.png';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={classes.navBar}>
      <ul>
        <li>
          <NavLink to="/">
            <img src={home} alt="" />
            <span> Моя страница</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/news">
            <img src={news} alt="" />
            <span>Новости</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">
            <img src={message} alt="" />
            <span>Мессенджер</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends">
            <img src={friends} alt="" />
            <span>Друзья</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/groops">
            <img src={coop} alt="" />
            <span>Сообщества</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/fotos">
            <img src={foto} alt="" />
            <span>Фотографии</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/music">
            <img src={music} alt="" />
            <span>Музыка</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/videos">
            <img src={video} alt="" />
            <span>Видео</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/clips">
            <img src={clip} alt="" />
            <span>Клипы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/games">
            <img src={games} alt="" />
            <span>Игры</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
