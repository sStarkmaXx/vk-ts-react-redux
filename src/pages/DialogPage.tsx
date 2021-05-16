import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import classes from '../App.module.css';
import css from './DialogPage.module.css';
import { DialogType } from '../redux/state';
import { NavLink, Route } from 'react-router-dom';
import { DialogsList } from '../components/Dialogs/DialogsList';
import { MessagesPage } from './MessagesPage';

type DualogPagePropsType = {
  dialogs: Array<DialogType>;
};

export const DialogPage: React.FC<DualogPagePropsType> = (props) => {
  let route = props.dialogs.map((dialog) => {
    let path = `/dialogs/${dialog.name}`;
    return (
      <Route
        path={path}
        render={() => (
          <MessagesPage
            key={dialog.id}
            messages={dialog.messages}
            profileName={dialog.name}
            profileImg={dialog.profileImg}
          />
        )}
      ></Route>
    );
  });
  debugger;
  return (
    <>
      <Header />
      <div className={classes.content}>
        <Navbar />
        <div className={classes.container}>
          <Route
            path={'/dialogs'}
            render={() => <DialogsList dialogs={props.dialogs} />}
          ></Route>
          {route}
          <Route
            path={'/dialogs/Dimych'}
            render={() => (
              <MessagesPage
                key={props.dialogs[0].id}
                messages={props.dialogs[0].messages}
                profileName={props.dialogs[0].name}
                profileImg={props.dialogs[0].profileImg}
              />
            )}
          ></Route>
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
