import React, {Component} from 'react';
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Home from './Home';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';


class Routes extends Component {
    render() {
        return ( 
            <div className = "Routes" >
                <BrowserRouter>
                    <Switch>

                        <Route 
                            exact 
                            path="/companies" 
                            render={() => <Companies/>}
                        />

                        <Route 
                            exact 
                            path="/companies/:handle" 
                            render={() => <Company/>}
                        />

                        <Route 
                            exact 
                            path="/" 
                            render={() => <Home/>}
                        />

                        <Route 
                            exact 
                            path="/jobs" 
                            render={() => <Jobs/>}
                        />

                        <Route 
                            exact 
                            path="/login" 
                            render={() => <Login/>}
                        />

                        <Route 
                            exact 
                            path="/register" 
                            render={() => <Login/>}
                        />

                        <Route 
                            exact 
                            path="/profile" 
                            render={() => <Profile/>}
                        />

                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;