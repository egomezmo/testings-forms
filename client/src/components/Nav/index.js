import React from "react";
import "./Nav.css";
function Nav() {
  return (

    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="mynav">
        <a className="navbar-brand" href="/">FINANCE 101</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a className="nav-link" href="/Tips">Tips</a></li>
            <li className="nav-item"><a className="nav-link" href="/Tools">Tools</a></li>
            <li className="nav-item dropdown"></li>
          </ul>
        </div>
      </nav>



    </div>






  );
}

export default Nav;


