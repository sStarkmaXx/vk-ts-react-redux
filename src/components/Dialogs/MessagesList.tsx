import css from './DialogsList.module.css';
import React from 'react';
import { MessageType } from '../../redux/state';
import { Message } from './Message';

type MessageListPropsType = {
  messages: Array<MessageType>;
  profileName: string;
  profileImg: string;
};

export const MessagesList: React.FC<MessageListPropsType> = (props) => {
  let messages = props.messages.map((message) => {
    return (
      <Message
        key={message.id}
        profileName={props.profileName}
        profileImg={props.profileImg}
        message={message.message}
      />
    );
  });
  return (
    <div className={css.dialogsList}>
      <div className={css.searchDialogs}></div>
      <div className={css.dialogsContainer}>{messages}</div>
      <div className={css.dialogsListFooter}>
        <span>Отключить звуковые уведомления</span>
      </div>
    </div>
  );
};
