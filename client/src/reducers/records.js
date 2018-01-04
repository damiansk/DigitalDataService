import {
  RECORDS_USER_RECORDS_PENDING, RECORDS_USER_RECORDS_SUCCESS, RECORDS_USER_RECORDS_ERROR,
  RECORD_CREATE_RECORD_PENDING, RECORD_CREATE_RECORD_SUCCESS, RECORD_CREATE_RECORD_ERROR,
  RECORDS_REPORTED_RECORDS_PENDING, RECORDS_REPORTED_RECORDS_SUCCESS, RECORDS_REPORTED_RECORDS_ERROR,
  API_GET_ACCEPTED_RECORDS_PENDING, API_GET_ACCEPTED_RECORDS_SUCCESS, API_GET_ACCEPTED_RECORDS_ERROR,
  API_GET_REJECTED_RECORDS_PENDING, API_GET_REJECTED_RECORDS_SUCCESS, API_GET_REJECTED_RECORDS_ERROR,
  API_GET_PUBLIC_RECORDS_PENDING, API_GET_PUBLIC_RECORDS_SUCCESS, API_GET_PUBLIC_RECORDS_ERROR
} from '../constants/actions';

const initialState = {
  userRecords: {
    list: [],
    isPending: false,
    error: ''
  },
  reportedRecords: {
    list: [],
    isPending: false,
    error: ''
  },
  acceptedRecords: {
    list: [],
    isPending: false,
    error: ''
  },
  rejectedRecords: {
    list: [],
    isPending: false,
    error: ''
  },
  publicRecords: {
    list: [],
    isPending: false,
    error: ''
  },
  createRecord: {
    created: false,
    isPending: false
  }
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
          list: action.payload.data.records,
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
  
    case RECORDS_REPORTED_RECORDS_PENDING:
      return {
        ...state,
        reportedRecords: {
          ...state.reportedRecords,
          isPending: true
        }
      };
  
    case RECORDS_REPORTED_RECORDS_SUCCESS:
      return {
        ...state,
        reportedRecords: {
          ...state.reportedRecords,
          list: action.payload.data.records,
          isPending: false
        }
      };
  
    case RECORDS_REPORTED_RECORDS_ERROR:
      return {
        ...state,
        reportedRecords: {
          isPending: false,
          error: action.payload.error
        }
      };
  
    case API_GET_ACCEPTED_RECORDS_PENDING:
      return {
        ...state,
        acceptedRecords: {
          ...state.acceptedRecords,
          isPending: true
        }
      };
  
    case API_GET_ACCEPTED_RECORDS_SUCCESS:
      return {
        ...state,
        acceptedRecords: {
          ...state.acceptedRecords,
          list: action.payload.data.records,
          isPending: false
        }
      };
  
    case API_GET_ACCEPTED_RECORDS_ERROR:
      return {
        ...state,
        acceptedRecords: {
          isPending: false,
          error: action.payload.error
        }
      };
  
    case API_GET_REJECTED_RECORDS_PENDING:
      return {
        ...state,
        rejectedRecords: {
          ...state.rejectedRecords,
          isPending: true
        }
      };
  
    case API_GET_REJECTED_RECORDS_SUCCESS:
      return {
        ...state,
        rejectedRecords: {
          ...state.rejectedRecords,
          list: action.payload.data.records,
          isPending: false
        }
      };
  
    case API_GET_REJECTED_RECORDS_ERROR:
      return {
        ...state,
        rejectedRecords: {
          isPending: false,
          error: action.payload.error
        }
      };
  
    case API_GET_PUBLIC_RECORDS_PENDING:
      return {
        ...state,
        publicRecords: {
          ...state.publicRecords,
          isPending: true
        }
      };
  
    case API_GET_PUBLIC_RECORDS_SUCCESS:
      return {
        ...state,
        publicRecords: {
          ...state.publicRecords,
          list: action.payload.data.records,
          isPending: false
        }
      };
  
    case API_GET_PUBLIC_RECORDS_ERROR:
      return {
        ...state,
        publicRecords: {
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
      
    default:
      return state;
  }
}