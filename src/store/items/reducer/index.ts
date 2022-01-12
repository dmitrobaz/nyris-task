import { itemsConstants } from '../actions';

const initialState = {
  loading: false,
  error: null,
};

export function items(state = initialState, action: { [name: string]: string }) {
  switch (action.type) {
    case itemsConstants.GET_ITEMS_CONFIG:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case itemsConstants.GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case itemsConstants.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: null,
      };
    case itemsConstants.GET_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
