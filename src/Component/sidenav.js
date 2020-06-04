import React from 'react';
import './sidenav.css';

function SideNav() {
    return (
      <div className="sidenav">
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul className="navbar-nav">
       <li className="nav-item active">
      <a className="nav-link" href="#">Easy Split</a>
    </li>
  </ul>
</nav>
</div>);
    }
export default SideNav;
