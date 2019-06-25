import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav (props) {
return (
<header>
    <div className="menu-btn" onClick={props.animations}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
        <li className="menu-item">
          <Link to={process.env.PUBLIC_URL + '/'} className="nav-link" onClick={props.animations}>
            Home
          </Link>
        </li>
        <li className="menu-item current">
          <Link to={process.env.PUBLIC_URL + '/about'} className="nav-link" onClick={props.animations}>
            About Me
          </Link>
        </li>
        <li className="menu-item">
          <Link to={process.env.PUBLIC_URL + '/portfolio'} className="nav-link" onClick={props.animations}>
            Work
          </Link>
        </li>
        <li className="menu-item">
          <Link to={process.env.PUBLIC_URL + '/contact'} className="nav-link" onClick={props.animations}>
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
}
