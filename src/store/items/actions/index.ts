import { createAction } from 'redux-actions';

export const itemsConstants = {
  GET_ITEMS_REQUEST: 'GET_ITEMS_REQUEST',
  GET_ITEMS_SUCCESS: 'GET_ITEMS_SUCCESS',
  GET_ITEMS_FAILURE: 'GET_ITEMS_FAILURE',

  GET_ITEMS_CONFIG: 'GET_ITEMS_CONFIG',
};

interface IData {
  
}

export const getItemsConfig = createAction(itemsConstants.GET_ITEMS_CONFIG, (data: IData) => data);

export const getItemsRequest = createAction(itemsConstants.GET_ITEMS_REQUEST);
export const getItemsSuccess = createAction(
  itemsConstants.GET_ITEMS_SUCCESS,
  (data: { [name: string]: string }) => data,
);
export const getItemsFailure = createAction(
  itemsConstants.GET_ITEMS_FAILURE,
  (errors: string) => errors,
);
