import React from 'react';
import './common.scss';
import { UserProvider } from './UserContext';
import Users from './Users';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import AddUser from './AddUser';
import ChoosenUser from './ChoosenUser';

export default function Root(){

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="nav flexbox">
                        <li className="nav__item">
                            <Link to="/" className="nav__link" > Home </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/user" className="nav__link" > Użytkownicy </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/user/add" className="nav__link" > Dodaj </Link>
                        </li>
                    </ul>
                </nav>
                <UserProvider> 
                    <Switch>
                        <Route exact path="/user">
                            <Users />
                        </Route>
                        <Route exact path="/user/add">
                            <AddUser />
                        </Route>
                        <Route exact path="/user/:id">
                            <ChoosenUser />
                        </Route>
                        <Route path="/">
                            <Redirect to="/user" />
                        </Route>
                    </Switch>
                </UserProvider>
            </div>
        </BrowserRouter>
    )
}