import css from './MessagesList.module.css';
import React from 'react';
import { MessageType } from '../../../redux/state';
import { Message } from './Message';
import { NavLink } from 'react-router-dom';
import sendMessage from '../../../icons/sendMessage.png';
import clipBoard from '../../../icons/clipBoard.png';

type MessageListPropsType = {
  messages: Array<MessageType>;
  profileName: string;
  profileImg: string;
};

export const MessagesList: React.FC<MessageListPropsType> = (props) => {
  let back = '< Назад';
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
      <div className={css.chatHeader}>
        <NavLink to={'/dialogs'}>{back}</NavLink>
        <div className={css.dialogName}>{props.profileName}</div>
      </div>

      <div className={css.dialogsContainer}>{messages}</div>
      <div className={css.chatInput}>
        <div className={css.addItem}>
          <img src={clipBoard} alt="" />
        </div>
        <input
          type="text"
          className={css.input}
          placeholder="Напишите сообщение..."
        />
        <div className={css.sendMessage}>
          <img src={sendMessage} alt="" />
        </div>
      </div>
    </div>
  );
};
