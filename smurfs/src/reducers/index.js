import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  creatingSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCHING:
      return { ...state, fetchingSmurfs: true };
    case actionTypes.FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case actionTypes.CREATING_NEW_SMURF:
      return { ...state, creatingSmurf: true };
    case actionTypes.CREATE_NEW_SMURF:
      return { ...state, smurfs: action.payload, creatingSmurf: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
