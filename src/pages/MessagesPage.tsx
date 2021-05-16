import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import classes from '../App.module.css';
import css from './DialogPage.module.css';
import { DialogPrev } from '../components/Dialogs/DialogPrev';
import { DialogType } from '../redux/state';
import { NavLink } from 'react-router-dom';

type PropsType = {
  dialogs: Array<DialogType>;
};

export const DialogPage: React.FC<PropsType> = (props) => {
  let dialogs = props.dialogs.map((dialog) => {
    let lastMessage = dialog.messages[dialog.messages.length - 1];
    return (
      <DialogPrev
        key={dialog.id}
        profileName={dialog.name}
        lastMessage={lastMessage.message}
        profileImg={dialog.profileImg}
      />
    );
  });
  return (
    <>
      <Header />
      <div className={classes.content}>
        <Navbar />
        <div className={classes.container}>
          <div className={css.dialogsList}>
            <div className={css.searchDialogs}></div>
            <div className={css.dialogsContainer}>{dialogs}</div>
            <div className={css.dialogsListFooter}>
              <span>Отключить звуковые уведомления</span>
            </div>
          </div>
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
