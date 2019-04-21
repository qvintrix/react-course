import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "../pages/home-page";
import FilmDetailPage from "../pages/film-detail";
import './app.scss';

const ErrorPage = () => <h1 className="error-title">404 Error: page not found</h1>;

const App = () => (
    <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/search/:search" component={HomePage} exact></Route>
        <Route path="/film/:id" component={FilmDetailPage} exact></Route>
        <Route path="*" component={ErrorPage}/>
    </Switch>
);


export default App;
