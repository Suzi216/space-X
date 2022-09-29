import { createAsyncThunk } from '@reduxjs/toolkit';

const JOINED_MISSION = 'mission/JOINED_MISSION';
const DISPLAY_MISSION = 'mission/DISPLAY_BOOKS';
const LEAVE_MISSION = 'mission/LEAVE_MISSION';
const url = 'https://api.spacexdata.com/v3/missions';

// display
export const displayMission = createAsyncThunk(DISPLAY_MISSION, async () => {
  const response = await fetch(
    url,
  );
  const data = await response.json();
  const mission = Object.keys(data).map((key) => ({
    loading: false,
    mission_id: data[key].mission_id,
    mission_name: data[key].mission_name,
    description: data[key].description,
  }));
  return mission;
});

export const joinmission = (id) => (dispatch) => {
  dispatch({
    type: JOINED_MISSION,
    payload: id,
  });
};
export const leavemission = (id) => (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: id,
  });
};

const initialState = [];

const MissionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'mission/DISPLAY_BOOKS/fulfilled':
      return payload;
    case JOINED_MISSION:
      return state.map((mission) => (mission.mission_id !== payload ? mission : { ...mission, join: true }));
    case LEAVE_MISSION:
      return state.map((mission) => (mission.mission_id !== payload ? mission : { ...mission, join: false }));
    default:
      return state;
  }
};

export default MissionReducer;
