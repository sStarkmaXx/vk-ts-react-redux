import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import classes from '../App.module.css';
import css from './DialogPage.module.css';

export const DialogPage = () => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <div className={classes.container}>
          <Navbar />
          <div className={css.dialogsList}>
            <div className={css.searchDialogs}></div>
            <div className={css.dialogsContainer}>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
              <div className={css.dialogInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                odio natus? Perspiciatis, fuga at dicta aliquid ex dolorum. Esse
                placeat non nemo odio aliquid provident doloremque perspiciatis
                sint reiciendis soluta.
              </div>
            </div>

            <div className={css.dialogsListFooter}>
              <span>Отключить звуковые уведомления</span>
            </div>
          </div>
          <div className={classes.leftCol}></div>
        </div>
      </div>
    </>
  );
};
