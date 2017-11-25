import { WIZARD_FILES_COUNT_INCREMENT } from '../constants/actions';

export function incrementFilesCount() {
  return {
    type: WIZARD_FILES_COUNT_INCREMENT
  };
}
