import React, { Component } from 'react';
import JoblyApi from './JoblyAPI';
import JobCard from './JobCard';

/**
 * Recieves ONE company data from API request
 * Renders ONE company details
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

  // gets company data and adds it to state. changes
  // loading to false
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
    // set of job ids of jobs user has applied to
    const appliedJobs = new Set(this.props.currJobs.map( job => job.id ));
    const company = this.state.companyData;
    let jobs;
  
    if (!this.state.loading) {
      jobs = this.state.companyData.jobs.map( job => 
        <JobCard 
          title={job.title} 
          salary={job.salary} 
          equity={job.equity}
          key={ job.id }
          applied={ appliedJobs.has(job.id) }
          triggerApply={ () => this.props.triggerApply(job.id) }
        />
      )
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
        { this.state.error && <p>Something went wrong</p>}
      </div>
    );
  }
}

export default Company;
