import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import classes from '../App.module.css';
import css from './DialogPage.module.css';
import { MessageType } from '../redux/state';
import { NavLink } from 'react-router-dom';
import { MessagesList } from '../components/Dialogs/MessageList/MessagesList';

type MessagesPagePropsType = {
  messages: Array<MessageType>;
  key: string;
  profileName: string;
  profileImg: string;
};

export const MessagesPage: React.FC<MessagesPagePropsType> = (props) => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <Navbar />
        <div className={classes.container}>
          <MessagesList
            messages={props.messages}
            profileName={props.profileName}
            profileImg={props.profileImg}
          />
          <div className={css.rightDialogMenu}>
            <div className={css.menuWrap}>
              <NavLink to={'/dialogs'}>Все чаты</NavLink>
              <NavLink to={'/unread'}>Не прочитанные</NavLink>
              <NavLink to={'/important'}>Важные сообщения</NavLink>
            </div>
            <div className={css.openChatWrap}>
              <div className={css.openChatName}>Dimych</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
