import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
