import {
  RECORD_GET_RECORD_PENDING,
  RECORD_GET_RECORD_SUCCESS,
  RECORD_GET_RECORD_ERROR
} from '../constants/actions';

const initialState = {
  activeRecord: {
    isFetching: false,
    fetched: false,
    record: undefined,
    error: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECORD_GET_RECORD_PENDING:
      return {...state, activeRecord: {...state.activeRecord, isFetching: true}};
  
    case RECORD_GET_RECORD_SUCCESS:
      return {
        ...state,
        activeRecord: {
          ...state.activeRecord,
          isFetching: false,
          record: action.payload.record
        }
      };
  
    case RECORD_GET_RECORD_ERROR:
      return {
        ...state,
        activeRecord: {
          ...state.activeRecord,
          isFetching: false,
          record: undefined
        }
      };
      
    default:
      return state;
  }
};