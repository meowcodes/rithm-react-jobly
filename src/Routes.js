import React, { Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Home from './Home';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import JoblyApi from './JoblyAPI';


// All routes within the application.
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    // get token from API
    async handleLogin(input){
        try {
            // get token and save to local storage
            const token = await JoblyApi.getTokenLogin(input);
            localStorage.setItem("_token", token);
            this.props.triggerLogIn();
            this.setState({
                error: null
            });
        } catch(err) {
            this.setState({
                error: err
            });
        }
    }
    
    async handleRegister(input){
        try {
            // get token and save to local storage
            const token = await JoblyApi.getTokenRegister(input);
            localStorage.setItem("_token", token);
            this.setState({
                error: null
            });
            this.props.triggerLogIn();
        } catch(err) {
            this.setState({
                error: err
            });
        }
    }

    render() {

        return ( 
            <div className = "Routes" >
                <Switch>

                    <Route 
                        exact 
                        path="/companies" 
                        render={() => <Companies
                            
                        />}
                    />

                    <Route 
                        exact 
                        path="/companies/:handle" 
                        render={(rtProps) => <Company 
                            handle={ rtProps.match.params.handle }
                        />} 
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
                        render={(rtProps) => <Login
                            triggerLogin={ this.handleLogin }
                            history={ rtProps.history }
                            path={ rtProps.match.path }
                        />}
                    />

                    <Route 
                        exact 
                        path="/register" 
                        render={(rtProps) => <Login
                            triggerRegister={ this.handleRegister }
                            history={ rtProps.history }
                            path={ rtProps.match.path }
                        />}
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