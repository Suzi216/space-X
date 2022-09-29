const ROCKETS_FETCH = 'ROCKETS_FETCH';
const ROCKETS_RESERVE = 'ROCKETS_RESERVE';
const ROCKETS_CANCEL = 'ROCKETS_CANCEL';
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

export const rocketsReserve = (id) => ({
  type: ROCKETS_RESERVE,
  id,
});

export const rocketsCancel = (id) => ({
  type: ROCKETS_CANCEL,
  id,
});

const initstate = [];
const reducerRockets = (state = initstate, action) => {
  let finalState;
  switch (action.type) {
    case ROCKETS_FETCH:
      return action.payload;
    case ROCKETS_RESERVE:
      finalState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return finalState;
    case ROCKETS_CANCEL:
      finalState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return finalState;
    default:
      return state;
  }
};

export default reducerRockets;
