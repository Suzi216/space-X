import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMission, joinmission, leavemission } from '../redux/mission/mission';
import './mission.css';

const Mission = () => {
  const allmission = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  const clickHandler = (id, join) => {
    console.log(id);
    console.log(join);
    if (join === false || join === undefined) {
      dispatch(joinmission(id));
    } else {
      dispatch(leavemission(id));
    }
  };
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
              <button type="button" className={mission.join ? 'memberac' : 'member'}>{mission.join ? 'ACTIVE MEMBER' : 'NOT A MEMBER '}</button>
            </td>

            <td className="button-container1">
              <button id={mission.mission_id} onClick={() => clickHandler(mission.mission_id, mission.join)} type="button" className={mission.join ? 'joinac' : 'join'}>{mission.join ? 'Leave Mission' : 'Join Mission'}</button>
            </td>

          </tr>
        ))}
      </table>
    </div>
  );
};

export default Mission;
