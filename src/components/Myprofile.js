import { useSelector } from 'react-redux';
import './Myprofile.css';

const Myprofile = () => {
  const allmission = useSelector((state) => state.mission);
  const mission = Object.keys(allmission).map((key) => ({
    join: allmission[key].join,
    mission_name: allmission[key].mission_name,
  }));
  console.log(mission);
  return (
    // for the Mission table
    <table className="mission_table">
      <tr>
        <th>My Missions</th>
      </tr>
      {mission.map((mis) => mis.join && (
        <tr key={mis.mission_id}>
          <td>{mis.mission_name}</td>
        </tr>
      ))}
    </table>
  );
};

export default Myprofile;
