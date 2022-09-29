const ROCKETS_FETCH = 'ROCKETS_FETCH';
const URL = 'https://api.spacexdata.com/v3/rockets';

const structured = (data) => {
  const arr = [];
  data.forEach((element) => {
    const rockets = {};
    rockets.id = element.id;
    rockets.rocket_name = element.rocket_name;
    rockets.type = element.type;
    rockets.description = element.description;
    rockets.flickr_images = element.flickr_images;
    rockets.reserved = false;
    arr.push(rockets);
  });
  return arr;
};

export const rocketsFetch = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: ROCKETS_FETCH, payload: structured(data) });
};

const initstate = [];
const reducerRockets = (state = initstate, action) => {
  switch (action.type) {
    case ROCKETS_FETCH:
      return action.payload;
    default:
      return state;
  }
};

export default reducerRockets;
