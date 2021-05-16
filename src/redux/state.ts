import { v1 } from 'uuid';

let dimych =
  'https://sun4-11.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1';
let tony = 'https://www.kinonews.ru/insimgs/2018/newsimg/newsimg84151.jpg';
let durov =
  'https://sun9-75.userapi.com/impg/c854428/v854428049/1782ce/glu56v7fNZY.jpg?size=1080x1080&quality=96&sign=e7187148d910b095886e7e7039292e83&type=album';

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
          {
            id: v1(),
            message:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsum, totam numquam, unde sint blanditiis consequuntur consequatur animi commodi distinctio dolores veritatis facere similique officiis vel in accusantium beatae sunt.',
          },
          {
            id: v1(),
            message:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsum, totam numquam, unde sint blanditiis consequuntur consequatur animi commodi distinctio dolores veritatis facere similique officiis vel in accusantium beatae sunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsum, totam numquam, unde sint blanditiis consequuntur consequatur animi commodi distinctio dolores veritatis facere similique officiis vel in accusantium beatae sunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsum, totam numquam, unde sint blanditiis consequuntur consequatur animi commodi distinctio dolores veritatis facere similique officiis vel in accusantium beatae sunt.',
          },
          {
            id: v1(),
            message:
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsum, totam numquam, unde sint blanditiis consequuntur consequatur animi commodi distinctio dolores veritatis facere similique officiis vel in accusantium beatae sunt.',
          },
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
      {
        id: v1(),
        name: 'Павел Дуров',
        profileImg: durov,
        messages: [
          { id: v1(), message: 'Здарова Макс!' },
          { id: v1(), message: 'Давай ко мне в команду!нужен хороший разраб.' },
        ],
      },
    ],
  },
};
