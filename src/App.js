import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersView from './views/UsersView';
import NotFoundView from './views/NotFoundView';
import './app.css';
import UserDetailsView from './views/UserDetailsView';
import AppBar from './components/AppBar/AppBar';
import Home from './views/Home';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/users" exact component={UsersView} />
        <Route path="/users/:username" component={UserDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
}

export default App;
