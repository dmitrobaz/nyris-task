import { searchConstants } from '../actions';

const initialState = {
  value: '',
};

export function search(state = initialState, action: { [name: string]: string }) {
  switch (action.type) {
    case searchConstants.INPUT_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
