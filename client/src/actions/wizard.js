import {
  WIZARD_FILES_COUNTER_INCREMENT,
  WIZARD_FILES_LIST_ADD
} from '../constants/actions';

export function incrementFilesCounter() {
  return {
    type: WIZARD_FILES_COUNTER_INCREMENT
  };
}

export function addFileName(name) {
  return {
    type: WIZARD_FILES_LIST_ADD,
    payload: name
  }
}
