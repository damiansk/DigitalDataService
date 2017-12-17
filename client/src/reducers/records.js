import { RECORDS_FETCH_USER_RECORDS } from '../constants/actions'

const initialState = {
  userRecords: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECORDS_FETCH_USER_RECORDS:
      return {...state, userRecords: action.payload};
    default:
      return state;
  }
}