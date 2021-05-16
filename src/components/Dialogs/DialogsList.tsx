import { DialogPrev } from './DialogPrev';
import css from './DialogsList.module.css';
import React from 'react';
import { DialogType } from '../../redux/state';

type DialogsListPropsType = {
  dialogs: Array<DialogType>;
};

export const DialogsList: React.FC<DialogsListPropsType> = (props) => {
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
    <div className={css.dialogsList}>
      <div className={css.searchDialogs}></div>
      <div className={css.dialogsContainer}>{dialogs}</div>
      <div className={css.dialogsListFooter}>
        <span>Отключить звуковые уведомления</span>
      </div>
    </div>
  );
};
