import { WIZARD_FILES_COUNT_INCREMENT } from '../constants/actions';

const initialState = {
  filesCount: 0
};

const wizard = (state = initialState, action) => {
  switch (action.type) {
    case WIZARD_FILES_COUNT_INCREMENT:
      const filesCount = state.filesCount + 1;
      return {...state, filesCount};
    default:
      return state;
  }
};

export default wizard;