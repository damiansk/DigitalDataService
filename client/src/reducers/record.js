import {
  RECORD_GET_RECORD_PENDING,
  RECORD_GET_RECORD_SUCCESS,
  RECORD_GET_RECORD_ERROR
} from '../constants/actions';

const initialState = {
  activeRecord: {
    isFetching: false,
    fetched: false,
    record: {},
    error: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECORD_GET_RECORD_PENDING:
      return {...state, activeRecord: {fetched: false, isFetching: true}};
  
    case RECORD_GET_RECORD_SUCCESS:
      return {
        ...state,
        activeRecord: {
          fetched: true,
          isFetching: false,
          record: action.payload.record
        }
      };
  
    case RECORD_GET_RECORD_ERROR:
      return {...state, activeRecord: {isFetching: false}};
      
    default:
      return state;
  }
};