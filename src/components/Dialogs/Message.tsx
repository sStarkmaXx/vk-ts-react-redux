import css from './DialogPrev.module.css';
import React from 'react';

type MessagePropsType = {
  key: string;
  profileName: string;
  message: string;
  profileImg: string;
};

export const Message: React.FC<MessagePropsType> = (props) => {
  let url = `url(${props.profileImg})`;
  return (
    <div className={css.dialogInfo} key={props.key}>
      <div className={css.dialogImg}>
        <div className={css.img} style={{ backgroundImage: url }}></div>
      </div>
      <div className={css.dialogDetail}>
        <div className={css.dialogName}>{props.profileName}</div>
        <div className={css.dialogTime}>19:21</div>
        <div className={css.dialogTextPrev}>{props.message}</div>
      </div>
    </div>
  );
};
