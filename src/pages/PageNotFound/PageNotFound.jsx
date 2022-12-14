import React from 'react';
import { Link } from 'react-router-dom';
import pnf from '../../images/pnf.jpg';
import './PageNoutFound.scss';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img src={pnf} alt="Page Not Found" />
      <Link to="/"> Go Back Home </Link>
    </div>
  );
};

export default PageNotFound;
