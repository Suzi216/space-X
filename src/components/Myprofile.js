import { useSelector } from 'react-redux';
import './Myprofile.css';

const Myprofile = () => {
  const allmission = useSelector((state) => state.mission);
  const allRockets = useSelector((state) => state.rockets);

  const rocket = Object.keys(allRockets).map((key) => ({
    reserved: allRockets[key].reserved,
    rocket_name: allRockets[key].rocket_name,
  }));

  const mission = Object.keys(allmission).map((key) => ({
    join: allmission[key].join,
    mission_name: allmission[key].mission_name,
  }));
  console.log(mission);
  return (
    // for the Mission table
    <div className="our-profile">
      <div>
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
      </div>
      <div>
        <table className="rocket_table">
          <tr>
            <th>My Rockets</th>
          </tr>
          {rocket.map((rock) => rock.reserved && (
          <tr key={rock.rocket_id}>
            <td>{rock.rocket_name}</td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Myprofile;
