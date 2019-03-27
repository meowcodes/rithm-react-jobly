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
      data: []
    }
    this.updateQuery = this.updateQuery.bind(this)
  }

  // get job data from API
  async componentDidMount() {
    let data = await JoblyApi.getJobs()

    this.setState({
      data: data,
      loading: false
    });
  }

  // updates query make another API req
  async updateQuery(query) {
    let searchData = await JoblyApi.getJobs({"search": query})
    this.setState({
      data: searchData
    });
  }


  render() {
    const jobs = this.state.data.map( job => 
      <JobCard data={job} key={ job.id }/>
    )
    return (
      <div className="jobs">
        { this.state.loading
          ? <p>Loading...</p>
          : <div>
            <Search triggerUpdateQuery={this.updateQuery} />
            { jobs }
          </div>
        } 
      </div>
    );
  }
}

export default Jobs;
