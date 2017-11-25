import {
  WIZARD_FILES_COUNTER_INCREMENT,
  WIZARD_FILES_LIST_ADD
} from '../constants/actions';

const initialState = {
  filesCounter: 0,
  filesNameList: []
};

const wizard = (state = initialState, action) => {
  switch (action.type) {
    
    case WIZARD_FILES_COUNTER_INCREMENT:
      const filesCounter = state.filesCounter + 1;
      return {
        ...state,
        filesCounter
      };
      
    case WIZARD_FILES_LIST_ADD:
      return {
        ...state,
        filesNameList: state.filesNameList.concat(action.payload)
      };
      
    default:
      return state;
  }
};

export default wizard;