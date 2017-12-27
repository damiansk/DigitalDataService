import {
  RECORD_GET_RECORD_PENDING,
  RECORDS_USER_RECORDS_ERROR,
  RECORDS_USER_RECORDS_PENDING,
  RECORDS_USER_RECORDS_SUCCESS,
  RECORD_CREATE_RECORD_PENDING,
  RECORD_CREATE_RECORD_SUCCESS,
  RECORD_CREATE_RECORD_ERROR
} from '../constants/actions';

const initialState = {
  userRecords: {
    list: [],
    isPending: false,
    error: ''
  },
  createRecord: {
    created: false,
    isPending: false
  },
  fetchedRecord: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case RECORDS_USER_RECORDS_PENDING:
      return {
        ...state,
        userRecords: {
          ...state.userRecords,
          isPending: true
        }
      };
      
    case RECORDS_USER_RECORDS_SUCCESS:
      return {
        ...state,
        userRecords: {
          ...state.userRecords,
          list: action.payload.records,
          isPending: false
        }
      };
  
    case RECORDS_USER_RECORDS_ERROR:
      return {
        ...state,
        userRecords: {
          isPending: false,
          error: action.payload.error
        }
      };
  
    //TODO move this states to RECORD reducer (and fix dependencies)
    case RECORD_CREATE_RECORD_PENDING:
      return {...state, createRecord: {created: false, isPending: true}};
        
    case RECORD_CREATE_RECORD_SUCCESS:
      return {...state, createRecord: {created: true, isPending: false}};
        
    case RECORD_CREATE_RECORD_ERROR:
      return {...state, createRecord: {isPending: false}};
      
    case RECORD_GET_RECORD_PENDING:
      return {...state, fetchedRecord: action.payload};
      
    default:
      return state;
  }
}