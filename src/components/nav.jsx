import React from 'react';

export default function Nav (props) {
  const {state} = props;
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
          <p className="nav-link" onClick={e => props.animations(e)} style={state.homeActive ? {color: '#eccf28'} : null}>
            Home
          </p>
        </li>
        <li className="menu-item current">
          <p className="nav-link" onClick={e => props.animations(e)} style={state.aboutActive ? {color: '#eccf28'} : null}>
            About Me
          </p>
        </li>
        <li className="menu-item">
          <p className="nav-link" onClick={e => props.animations(e)} style={state.workActive ? {color: '#eccf28'} : null}>
            Work
          </p>
        </li>
        <li className="menu-item">
          <p className="nav-link" onClick={e => props.animations(e)} style={state.contactActive ? {color: '#eccf28'} : null}>
            Contact me
          </p>
        </li>
      </ul>
    </nav>
  </header>
);
}
