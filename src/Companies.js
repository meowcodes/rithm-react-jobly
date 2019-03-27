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
      companiesData: [],
      error: null
    }
    this.updateQuery = this.updateQuery.bind(this)
  }

  // get company data from API
  async componentDidMount() {
    try {
      let data = await JoblyApi.getCompanies() // FIXME: TRY CATCH 
      this.setState({
        companiesData: data,
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
      let searchResults = await JoblyApi.getCompanies({"search": query})
      this.setState({
        companiesData: searchResults
      });
    } catch(err) {
      this.setState({
        error: err
      });
    }
  }


  render() {
    const companies = this.state.companiesData.map( company => 
      <CompanyCard handle={company.handle} logo_url={company.logo_url} name={company.name} description={company.description} key={ company.handle }/>
    )
    return (
      <div className="Companies">
        { !this.state.error && this.state.loading
          ? <p>Loading...</p>
          : <div>
            <Search triggerUpdateQuery={this.updateQuery} />
            { companies }
          </div>
        }
        { this.state.error && <p>Something happened</p>}
      </div>
    );
  }
}

export default Companies;
