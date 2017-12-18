import {
  RECORDS_FETCH_USER_RECORDS,
  RECORD_FETCH
} from '../constants/actions';

const initialState = {
  userRecords: [],
  fetchedRecord: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECORDS_FETCH_USER_RECORDS:
      return {...state, userRecords: action.payload};
    case RECORD_FETCH:
      return {...state, fetchedRecord: action.payload};
    default:
      return state;
  }
}