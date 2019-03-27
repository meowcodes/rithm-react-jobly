import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';
/**
 * Recieves ONE company data from Companies
 * Renders a card with company data
 * On click, routes to company details page
 */

class CompanyCard extends Component {

  render() {
    const company = this.props.data;

    return (
      <Link className="CompanyCard-link" to={`/companies/${ company.handle }`}>
        <div className="CompanyCard">
        
        {company.logo_url 
          ? <img className="CompanyCard-logo" src={ company.logo_url } alt={ company.name }/> 
          : <i className="far fa-building CompanyCard-logo"></i>
         }
         
          <p className="CompanyCard-name">
            { company.name }
          </p>
          <p className="CompanyCard-desc">
            { company.description }
          </p>
        </div>
      </Link>
    );
  }
}

export default CompanyCard;
