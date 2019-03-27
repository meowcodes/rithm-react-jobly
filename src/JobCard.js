import React, { Component } from 'react';
import './JobCard.css';
/**
 * Recieves ONE job data
 * Renders a card with job data
 */

class JobCard extends Component {

  render() {
    const job = this.props.data;
    return (
        <div className="JobCard">
            <div className="JobCard-text">
                <p className="JobCard-title">
                    { job.title }
                </p>

                <p className="JobCard-salary">
                    Salary: { job.salary }
                </p>

                <p className="JobCard-equity">
                    Equity: { job.equity }
                </p>
            </div>
            <button>APPLY</button>

        </div>
    );
  }
}

export default JobCard;
