import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from './Book';
// import Bookform from './Bookform';
import { displayMission } from '../redux/mission/mission';

const Mission = () => {
  const allmission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  console.log(allmission);
  useEffect(() => {
    dispatch(displayMission());
  }, []);

  return (
    <div>
      Hello from mission
    </div>
  );
};

export default Mission;
