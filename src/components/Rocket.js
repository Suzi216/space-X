import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rocketsFetch } from '../redux/rockets/Rockets';
import './rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(rocketsFetch);
  }, []);

  return (
    <div className="container">
      <ul className="list-of-rockets">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="each-rocket">
            <img src={rocket.flickr_images[0]} alt="rockets-images" className="img-rocket" />
            <div className="rocket-rockets">
              <h3>{rocket.rocket_name}</h3>
              <p>{rocket.type}</p>
              <button type="button" className={`reservation ${rocket.reserved ? '' : 'hide'}`}>Reserved</button>
              <p>{rocket.description}</p>
              <button type="button" className={`rocket-btn ${rocket.reserved ? 'hide' : ''}`}>Reservation</button>
              <button type="button" className={`cancel-btn ${rocket.reserved ? '' : 'hide'}`}>Cancel Reservation</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Rockets;
