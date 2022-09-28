import React from 'react';
import { NavLink } from 'react-router-dom';
import Planet from '../images/planet.png';
import './Nav.css';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/Rocket',
      text: 'Rocket',
    },
    {
      id: 2,
      path: '/mission',
      text: 'Mission',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'Myprofile',
    },
  ];
  return (
    <nav className="navig-container">
      <div className="logo-header">
        <img alt="logo" className="image" src={Planet} />
        <h1 className="title">Space Travelers Hub</h1>
      </div>
      <ul className="navBar">
        {links.map((link) => <li key={link.id}><NavLink to={link.path} className={({ isActive }) => (isActive ? 'link-active' : 'link')}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};
export default Nav;
