import { WIZARD_FILES_COUNT_INCREMENT } from '../constants/actions';

const initialState = {
  filesCount: 0
};

const wizard = (state = initialState, action) => {
  switch (action.types) {
    case WIZARD_FILES_COUNT_INCREMENT:
      return {...state, initialState: initialState + 1};
    default:
      return state;
  }
};

export default wizard;