import {
  RECORD_GET_RECORD_PENDING,
  RECORD_GET_RECORD_SUCCESS,
  RECORD_GET_RECORD_ERROR,
  RECORD_REPORT_RECORD_PENDING,
  RECORD_REPORT_RECORD_SUCCESS,
  RECORD_REPORT_RECORD_ERROR, RECORD_ACCEPT_RECORD_PENDING, RECORD_ACCEPT_RECORD_SUCCESS, RECORD_ACCEPT_RECORD_ERROR
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
      
    case RECORD_REPORT_RECORD_PENDING:
      return {...state, recordStatus: {isPending: true, updated: false}};
      
    case RECORD_REPORT_RECORD_SUCCESS:
      return {...state, recordStatus: {isPending: false, updated: true}};
      
    case RECORD_REPORT_RECORD_ERROR:
      return {
        ...state,
        recordStatus: {
          error: action.payload.data.error,
          isPending: false,
          updated: false
        }
      };
      
    case RECORD_ACCEPT_RECORD_PENDING:
      return {...state, recordStatus: {isPending: true, updated: false}};
  
    case RECORD_ACCEPT_RECORD_SUCCESS:
      return {...state, recordStatus: {isPending: false, updated: true}};
  
    case RECORD_ACCEPT_RECORD_ERROR:
      return {
        ...state,
        recordStatus: {
          error: action.payload.data.error,
          isPending: false,
          updated: false
        }
      };
      
    default:
      return state;
  }
};