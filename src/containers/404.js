import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Master from './Master';
class PageNotFound extends Component {
  render() {
    return (
      <Master>
        <div className="content">
          <h1>I did not get that!</h1>
        </div>
      </Master>
    );
  }
}

export default PageNotFound;
