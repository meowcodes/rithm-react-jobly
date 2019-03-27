import React, { Component } from 'react';
import JoblyApi from './JoblyAPI';
import Search from './Search';
import CompanyCard from './CompanyCard';

/**
 * Recieves a list of company data from API request & search keyword from Search
 * Renders all/searched companies (CompanyCard) and search bar (Search)
 * Sends individual company data to CompanyCard
 */

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [] //FIXME: Improve name
    }
    this.updateQuery = this.updateQuery.bind(this)
  }

  // get company data from API
  async componentDidMount() {
    let data = await JoblyApi.getCompanies() // FIXME: TRY CATCH 

    this.setState({
      data: data,
      loading: false
    });
  }

  // updates query make another API req
  async updateQuery(query) {
    let searchResults = await JoblyApi.getCompanies({"search": query})
    this.setState({
      data: searchResults
    });
  }


  render() {
    const companies = this.state.data.map( company => 
      <CompanyCard data={company} key={ company.handle }/>
    )
    return (
      <div className="Companies">
        { this.state.loading
          ? <p>Loading...</p>
          : <div>
            <Search triggerUpdateQuery={this.updateQuery} />
            { companies }
          </div>
        } 
      </div>
    );
  }
}

export default Companies;
