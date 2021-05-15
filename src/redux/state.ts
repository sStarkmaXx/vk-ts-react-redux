import { v1 } from 'uuid';

let dimych =
  'https://sun4-11.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1';
let tony = 'https://www.kinonews.ru/insimgs/2018/newsimg/newsimg84151.jpg';

export type MessageType = {
  id: string;
  message: string;
};

export type DialogType = {
  id: string;
  name: string;
  profileImg: string;
  messages: Array<MessageType>;
};
export type DialogPageType = {
  dialogs: Array<DialogType>;
};

export type StateType = {
  DialogPage: DialogPageType;
};

export let state: StateType = {
  DialogPage: {
    dialogs: [
      {
        id: v1(),
        name: 'Dimych',
        profileImg: dimych,
        messages: [
          { id: v1(), message: 'Hello' },
          { id: v1(), message: 'Samurai' },
          { id: v1(), message: 'We are can fly!!!' },
        ],
      },
      {
        id: v1(),
        name: 'Tony Stark',
        profileImg: tony,
        messages: [
          { id: v1(), message: 'Hello, its Tony' },
          { id: v1(), message: 'Im Iron Man' },
          { id: v1(), message: 'Do you want to be like me?' },
        ],
      },
    ],
  },
};
