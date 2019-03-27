import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
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
                <Switch>

                    <Route 
                        exact 
                        path="/companies" 
                        render={() => <Companies/>}
                    />

                    <Route 
                        exact 
                        path="/companies/:handle" 
                        render={(rtProps) => <Company handle={ rtProps.match.params.handle }/>} //FIXME: add comp handle
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
                    <Redirect to="/"/>

                </Switch>
            </div>
        );
    }
}

export default Routes;