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

                {!this.props.currUser && 
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
                        render={() => <Profile 
                            username={this.props.currUser.username}
                            first_name={this.props.currUser.first_name}
                            last_name={this.props.currUser.last_name}
                            email={this.props.currUser.email}
                            photo_url={this.props.currUser.photo_url}
                            />}
                    />

                    <Redirect to="/"/>

                </Switch>
            </div>
        );
    }
}

export default PrivateRoutes;