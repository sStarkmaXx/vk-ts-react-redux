import { Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { DialogPage } from './pages/DialogPage';
import classes from './App.module.css';
import { state, DialogType } from './redux/state';

let dialogs: Array<DialogType> = state.DialogPage.dialogs;

function App() {
  return (
    <div className={classes.App}>
      <Route exact path={'/'} render={() => <ProfilePage />} />
      <Route
        exact
        path={'/dialogs'}
        render={() => <DialogPage dialogs={dialogs} />}
      />
    </div>
  );
}

export default App;
