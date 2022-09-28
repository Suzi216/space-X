import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Missiontable from './Missiontable';
// import Bookform from './Bookform';
import { displayMission } from '../redux/mission/mission';
import './mission.css';

const Mission = () => {
  const allmission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  console.log(allmission);
  useEffect(() => {
    if (!allmission.length) dispatch(displayMission());
  }, []);

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {allmission.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td className="button-container">
              <button type="button" className="member">NOT A MEMBER</button>
            </td>
            <td className="button-container1">
              <button type="button" className="join">Join Mission</button>
            </td>

          </tr>
        ))}
      </table>
    </div>
  );
};

export default Mission;
