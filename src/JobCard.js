import React, { Component } from 'react';
import './JobCard.css';
/**
 * Recieves ONE job data
 * Renders a card with job data
 */

class JobCard extends Component {

  render() {
    const { title, salary, equity } = this.props;
    return (
        <div className="JobCard">
            <div className="JobCard-text">
                <p className="JobCard-title">
                    { title }
                </p>

                <p className="JobCard-salary">
                    Salary: { salary }
                </p>

                <p className="JobCard-equity">
                    Equity: { equity }
                </p>
            </div>
            <button>APPLY</button>

        </div>
    );
  }
}

export default JobCard;
