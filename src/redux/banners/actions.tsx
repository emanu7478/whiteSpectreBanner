import { GetRequest } from '../../api';
import * as endPoints from '../../api/endPoints';
import * as types from './types';

export const fetchBanners = () => async (dispatch: any) => {
  const response = await GetRequest(endPoints.banners, null);
  if (response?.ok) {
    dispatch({ type: types.FETCH_BANNERS, payload: response?.data });
  }
};
