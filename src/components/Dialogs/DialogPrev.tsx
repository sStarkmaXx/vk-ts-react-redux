import css from './DialogPrev.module.css';
import React from 'react';
type PropsType = {
  key: string;
  profileName: string;
  lastMessage: string;
  profileImg: string;
};

export const DialogPrev: React.FC<PropsType> = (props) => {
  let url = `url(${props.profileImg})`;
  return (
    <div className={css.dialogInfo}>
      <div className={css.dialogImg}>
        <div className={css.img} style={{ backgroundImage: url }}></div>
      </div>
      <div className={css.dialogDetail}>
        <div className={css.dialogName}>{props.profileName}</div>
        <div className={css.dialogTime}>19:21</div>
        <div className={css.dialogTextPrev}>{props.lastMessage}</div>
      </div>
    </div>
  );
};
