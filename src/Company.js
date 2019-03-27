import React, { Component } from 'react';
import JoblyApi from './JoblyAPI';

/**
 * Recieves ONE company data from API request
 * Renders ONE company details
 * 
 */

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    }
  }

  async componentDidMount() {
    let data = await JoblyApi.getCompany(this.props.handle);
    this.setState({
      data: data,
      loading: false
    });
  }

  render() {
    const company = this.state.data;
    // const jobs = this.state.data.jobs;

    return (
      <div className="Company">
        { this.state.loading
          ? <p>Loading...</p>
          : <div><div>
          <p className="Company-name">
            { company.name }
          </p>
          <p className="Company-desc">
            { company.description }
          </p>
          </div>
          <div className="Company-jobs">
          
          </div>
          </div>
        } 
        
      </div>
    );
  }
}

export default Company;
