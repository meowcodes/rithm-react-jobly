import React, { Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';


// All routes within the application.
class PrivateRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    render() {

        return ( 
            <div className = "PrivateRoutes" >

                <Switch>

                {!this.props.isLoggedIn && 
                    <Redirect to="/login"/>}

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
                        path="/jobs" 
                        render={() => <Jobs/>}
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

export default PrivateRoutes;