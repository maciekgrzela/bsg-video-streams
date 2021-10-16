import React from 'react';
import { Switch, Route } from 'react-router';
import AuthRoute from './AuthRoute';
import LoginPage from './components/Access/LoginPage';
import MyAccountPage from './components/Access/MyAccountPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <AuthRoute exact path='/account' component={MyAccountPage} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
