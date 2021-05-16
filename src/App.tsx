import { Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { DialogPage } from './pages/DialogPage';
import classes from './App.module.css';
import { state, DialogType } from './redux/state';
import { MessagesPage } from './pages/MessagesPage';

let dialogs: Array<DialogType> = state.DialogPage.dialogs;

function App() {
  let route = dialogs.map((dialog) => {
    let path = `/dialogs/${dialog.name}`;
    return (
      <Route
        path={path}
        render={() => (
          <MessagesPage
            key={dialog.id}
            messages={dialog.messages}
            profileName={dialog.name}
            profileImg={dialog.profileImg}
          />
        )}
      ></Route>
    );
  });
  return (
    <div className={classes.App}>
      <Route exact path={'/'} render={() => <ProfilePage />} />
      <Route
        exact
        path={'/dialogs'}
        render={() => <DialogPage dialogs={dialogs} />}
      />
      {route}
    </div>
  );
}

export default App;
