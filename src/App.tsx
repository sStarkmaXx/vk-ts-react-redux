import { Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { DialogPage } from './pages/DialogPage';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Route exact path={'/'} render={() => <ProfilePage />} />
      <Route path={'/dialogs'} render={() => <DialogPage />} />
    </div>
  );
}

export default App;
