import React from 'react';
import Header from './header/Header';
import '../styles/Styles.scss';
import Landing from './body/Landing';
import RegisterUser from './Register/RegisterUser';
import Login from './body/login/Login';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />

      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={RegisterUser} />
      <Route path="/signin" component={Login} />
    </div>
  );
};

export default App;
