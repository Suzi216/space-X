import { createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_MISSION = 'mission/DISPLAY_BOOKS';
const url = 'https://api.spacexdata.com/v3/missions';

// display
export const displayMission = createAsyncThunk(DISPLAY_MISSION, async () => {
  const response = await fetch(
    url,
  );
  const data = await response.json();
  const mission = Object.keys(data).map((key) => ({
    mission_id: data[key].mission_id,
    mission_name: data[key].mission_name,
    description: data[key].description,
  }));
  return mission;
});

const initialState = [];

const MissionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'mission/DISPLAY_BOOKS/fulfilled':
      return payload;
    default:
      return state;
  }
};

export default MissionReducer;
