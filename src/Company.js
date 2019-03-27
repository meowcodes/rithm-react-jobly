import React, { Component } from 'react';
import JoblyApi from './JoblyAPI';
import JobCard from './JobCard';

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
      companyData: {},
      error: null
    }
  }

  async componentDidMount() {
    try{
      let data = await JoblyApi.getCompany(this.props.handle);
      this.setState({
        companyData: data,
        loading: false
      });
    } catch(err) {
      this.setState({
        error: err
      });
    }
  }

  render() {
    const company = this.state.companyData;
    let jobs;
  
    if (!this.state.loading) {
      jobs = this.state.companyData.jobs.map( job => 
        <JobCard title={job.title} salary={job.salary} equity={job.equity} key={ job.id }/>)
    }

    return (
      <div className="Company">
        { this.state.error && this.state.loading
          ? <p>Loading...</p>
          : <div>
              <p className="Company-name">
                { company.name }
              </p>

              <p className="Company-desc">
                { company.description }
              </p>

              <div className="Company-jobs">
                {jobs}
              </div>
          </div>
        } 
        { this.state.error && <p>Something happened</p>}
      </div>
    );
  }
}

export default Company;
