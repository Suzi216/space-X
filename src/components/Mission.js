import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Missiontable from './Missiontable';
// import Bookform from './Bookform';
import { displayMission } from '../redux/mission/mission';

const Mission = () => {
  const allmission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  console.log(allmission);
  useEffect(() => {
    if (!allmission.length) dispatch(displayMission());
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {allmission.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Mission;
