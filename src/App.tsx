import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import AuthRoute from './AuthRoute';
import LoginPage from './components/Access/LoginPage';
import MyAccountPage from './components/Access/MyAccountPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import SplashScreenPage from './components/Splash/SplashScreenPage';
import { loginAnonymousUser } from './state/auth/auth.thunk';
import {
  getFavoriteMediaList,
  getOtherMediaLists,
} from './state/medialist/mediaList.thunk';
import { RootState } from './state/root.reducer';
import { RequestStatusType } from './types/requestStatusType';

const App = () => {
  const dispatch = useDispatch();
  const loginAnonymousUserStatus = useSelector(
    (state: RootState) => state.auth.status.loginUser
  );
  const getFavoriteMediaListStatus = useSelector(
    (state: RootState) => state.mediaList.status.getFavoriteMediaList
  );
  const getOtherMediaListsStatus = useSelector(
    (state: RootState) => state.mediaList.status.getOtherMediaLists
  );

  const requestStatuses = [
    loginAnonymousUserStatus,
    getFavoriteMediaListStatus,
    getOtherMediaListsStatus,
  ];

  useEffect(() => {
    dispatch(loginAnonymousUser());
    dispatch(getFavoriteMediaList());
    dispatch(getOtherMediaLists());
  }, [dispatch]);

  if (requestStatuses.some((p) => p === RequestStatusType.PENDING)) {
    return <SplashScreenPage />;
  }

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
