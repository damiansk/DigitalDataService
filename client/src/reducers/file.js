import {
  RECORD_GET_RECORD_FILE_ERROR,
  RECORD_GET_RECORD_FILE_PENDING,
  RECORD_GET_RECORD_FILE_SUCCESS
} from '../constants/actions';

const initialState = {
  fetchedFilesId: [],
  fetchedFiles: {},
  isFetching: false,
  error: ''
};


export default (state = initialState, action) => {
  switch (action.type) {
    
    case RECORD_GET_RECORD_FILE_PENDING:
      return {...state, isFetching: true};
      
    case RECORD_GET_RECORD_FILE_SUCCESS: {
      const id = action.payload.headers['content-id'];
      const file = action.payload.data;
      return {
        ...state,
        fetchedFilesId: [...state.fetchedFilesId, id],
        fetchedFiles: {
          ...state.fetchedFiles,
          [id]: file
        },
        isFetching: false,
        error: undefined
      };
    }
    
    case RECORD_GET_RECORD_FILE_ERROR:
      return {...state, isFetching: false, error: action.payload.error};
      
    default:
      return state;
  }
}