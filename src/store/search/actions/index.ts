import { createAction } from 'redux-actions';

export const searchConstants = {
  INPUT_SEARCH_VALUE: 'INPUT_SEARCH_VALUE',
};

export const setSearchValue = createAction(
  searchConstants.INPUT_SEARCH_VALUE,
  (value: string) => value,
);
