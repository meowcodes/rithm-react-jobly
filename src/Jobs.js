import React, { Component } from 'react';
import JoblyApi from './JoblyAPI';
import Search from './Search';
import JobCard from './JobCard';

/**
 * Recieves a list of job data from API request & search keyword from Search
 * Renders all/searched jobs (JobCard) and search bar (Search)
 * Sends individual job data to JobCard
 */

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      jobData: [],
      error: null
    }
    this.updateQuery = this.updateQuery.bind(this)
  }

  // get job data from API
  async componentDidMount() {
    try {
      let data = await JoblyApi.getJobs()

      this.setState({
        jobData: data,
        loading: false
      });
    } catch(err) {
      this.setState({
        error: err
      });
    }
  }

  // updates query make another API req
  async updateQuery(query) {
    try {
      let searchData = await JoblyApi.getJobs({"search": query})
      this.setState({
        jobData: searchData
      });
    } catch(err) {
      this.setState({
        error: err
      });
    }
  }


  render() {
    const jobs = this.state.jobData.map( job => 
      <JobCard title={job.title} salary={job.salary} equity={job.equity} key={ job.id }/>
    )
    return (
      <div className="jobs">
        { !this.state.error && this.state.loading
          ? <p>Loading...</p>
          : <div>
            <Search triggerUpdateQuery={this.updateQuery} />
            { jobs }
          </div>
        } 
        { this.state.error && <p>Something happened</p>}
      </div>
    );
  }
}

export default Jobs;
