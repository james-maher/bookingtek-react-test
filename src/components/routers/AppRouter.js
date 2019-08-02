import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { ZipCodesPage } from '../pages/ZipCodesPage';

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/zipcodes" component={ZipCodesPage} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
