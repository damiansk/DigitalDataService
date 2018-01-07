import {
  RECORD_RESET_ACTIVE_RECORD,
  RECORD_GET_RECORD_PENDING, RECORD_GET_RECORD_SUCCESS, RECORD_GET_RECORD_ERROR,
  API_PUT_RECORD_UPDATE_STATE_PENDING, API_PUT_RECORD_UPDATE_STATE_SUCCESS, API_PUT_RECORD_UPDATE_STATE_ERROR
} from '../constants/actions';

const initialState = {
  activeRecord: {
    isFetching: false,
    record: undefined,
    error: ''
  },
  recordStatus: {
    isPending: false,
    updated: false,
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
          record: action.payload.data.record
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
  
    case API_PUT_RECORD_UPDATE_STATE_PENDING:
      return {...state, recordStatus: {isPending: true, updated: false}};
    
    case API_PUT_RECORD_UPDATE_STATE_SUCCESS:
      return {...state, recordStatus: {isPending: false, updated: true}};
    
    case API_PUT_RECORD_UPDATE_STATE_ERROR:
      return {
        ...state,
        recordStatus: {
          error: action.payload.data.error,
          isPending: false,
          updated: false
        }
      };
      
    case RECORD_RESET_ACTIVE_RECORD:
      return {
        ...state,
        activeRecord: initialState.activeRecord
      };
      
    default:
      return state;
  }
};