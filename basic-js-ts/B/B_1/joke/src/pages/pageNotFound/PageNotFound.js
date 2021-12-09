import React from 'react';
import './PageNotFound.scss';
import { Link } from 'react-router-dom'
const PageNotFound = () => (
  <div className="wrapper">
    <div className="title">404</div>
    <img src="https://i.imgur.com/qIufhof.png" style={{ width: 300, height: 300 }} />
    <div id="info">
      <h3>This page could not be found</h3>
      <Link to="/"><h4 style={{ color: 'blue' }}>Back to home page</h4></Link>
    </div>
  </div >
);

export default PageNotFound;