import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rocketsFetch, rocketsReserve, rocketsCancel } from '../redux/rockets/Rockets';
import './rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(rocketsFetch);
  }, []);

  const handleReserve = (id) => {
    dispatch(rocketsReserve(id));
  };

  const handleCancel = (id) => {
    dispatch(rocketsCancel(id));
  };

  return (
    <div className="container">
      <ul className="list-of-rockets">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="each-rocket">
            <img src={rocket.flickr_images[0]} alt="rockets-images" className="img-rocket" />
            <div className="rocket-rockets">
              <h3>{rocket.rocket_name}</h3>
              <p>{rocket.type}</p>
              <p>
                <button type="button" className={`reservation ${rocket.reserved ? '' : 'hide'}`}>Reserved</button>
                {rocket.description}
              </p>
              <button type="button" className={`rocket-btn ${rocket.reserved ? 'hide' : ''}`} onClick={() => handleReserve(rocket.id)}>Reserve Rocket</button>
              <button type="button" className={`cancel-btn ${rocket.reserved ? '' : 'hide'}`} onClick={() => handleCancel(rocket.id)}>Cancel Reservation</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Rockets;
