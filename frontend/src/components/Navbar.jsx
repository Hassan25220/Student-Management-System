import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Student Management</Link>
        <div>
          <Link className="btn btn-primary" to="/add-student">Add Student</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
