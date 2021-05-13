import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import classes from '../App.module.css';

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <div className={classes.container}>
          <Navbar />
          <div className={classes.leftCol}></div>
          <div className={classes.rightCol}></div>
        </div>
      </div>
    </>
  );
};
