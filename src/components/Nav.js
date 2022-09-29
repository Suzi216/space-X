import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Planet from '../images/planet.png';
import './Nav.css';

const Nav = () => {
  // assigning location variable
  const location = useLocation();

  // destructuring pathname from location
  const { pathname } = location;

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
  return (

    <>
      <div className="navig-container">
        <div className="logo-header">
          <img alt="logo" className="image" src={Planet} />
          <h1 className="title">Space Travelers Hub</h1>
        </div>
        <ul>
          {/* Checking the current path name using javascript ternary
                    operator and if true adding active classname to it */}
          <li className={splitLocation[1] === '' ? 'active' : ''}>
            <Link to="/">Rockets</Link>
          </li>
          <li className={splitLocation[1] === 'mission' ? 'active' : ''}>
            <Link to="/mission">Mission</Link>
          </li>
          <li className={splitLocation[1] === 'myprofile' ? 'active' : ''}>
            <Link to="/myprofile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Nav;
