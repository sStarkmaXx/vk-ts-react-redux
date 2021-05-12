import './App.css';
import { Header } from './components/Header';
import home from './icons/free-icon-user-149452.png';
import foto from './icons/foto.png';
import friends from './icons/friends.png';
import message from './icons/message.png';
import music from './icons/music.png';
import news from './icons/news.png';
import video from './icons/video.png';
import coop from './icons/coop.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="container">
          <div className="navBar">
            <ul>
              <li>
                <a href="">
                  <img src={home} alt="" />
                  <span> Моя страница</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={news} alt="" />
                  <span>Новости</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={message} alt="" />
                  <span>Мессенджер</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={friends} alt="" />
                  <span>Друзья</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={coop} alt="" />
                  <span>Сообщества</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={foto} alt="" />
                  <span>Фотографии</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={music} alt="" />
                  <span>Музыка</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={video} alt="" />
                  <span>Видео</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={video} alt="" />
                  <span>Клипы</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={home} alt="" />
                  <span>Игры</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="leftCol"></div>
          <div className="rightCol"></div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
