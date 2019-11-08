import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const CREATING_NEW_SMURF = "CREATING_NEW_SMURF";
export const CREATE_NEW_SMURF = "CREATE_NEW_SMURF";
export const ERROR = "ERROR";

const URL = "http://localhost:3333/smurfs";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: START_FETCHING });

    axios
      .get(`${URL}/get`)
      .then(response => console.log(response))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
  };
};

export const createSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/create`, smurf);
  return dispatch => {
    dispatch({ type: CREATING_NEW_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: CREATE_NEW_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// this will go in axios.then dispatch({ type: FETCH_SUCCESS, payload: response.data })
