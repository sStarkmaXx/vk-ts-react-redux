import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import classes from '../App.module.css';
import css from './DialogPage.module.css';
import { DialogType } from '../redux/state';
import { NavLink } from 'react-router-dom';
import { DialogsList } from '../components/Dialogs/DialogList/DialogsList';

type DualogPagePropsType = {
  dialogs: Array<DialogType>;
};

export const DialogPage: React.FC<DualogPagePropsType> = (props) => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <Navbar />
        <div className={classes.container}>
          <DialogsList dialogs={props.dialogs} />
          <div className={css.rightDialogMenu}>
            <div className={css.menuWrap}>
              <NavLink to={'/dialogs'} activeClassName={css.active}>
                Все чаты
              </NavLink>
              <NavLink to={'/unread'} activeClassName={css.active}>
                Не прочитанные
              </NavLink>
              <NavLink to={'/important'} activeClassName={css.active}>
                Важные сообщения
              </NavLink>
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
