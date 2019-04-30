import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/CompanyCard.css';

/**
 * Recieves ONE company data from Companies
 * Renders a card with company data
 * On click, routes to company details page
 */
class CompanyCard extends Component {

  render() {
    const { handle, logo_url, name, description }= this.props;

    return (
      <div className="CompanyCard">
        <Link className="CompanyCard-link" to={`/companies/${handle}`}>

          {logo_url
            ? <img className="CompanyCard-logo" src={logo_url} alt={name} />
            : <i className="far fa-building CompanyCard-logo"></i>
          }

          <p className="CompanyCard-name">
            {name}
          </p>

          <p className="CompanyCard-desc">
            {description}
          </p>

        </Link>
      </div>
    );
  }
}

export default CompanyCard;
