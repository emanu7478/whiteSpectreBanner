import * as types from './types';

const initialState = {
  loading: true,
  banners: [],
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };

  switch (action.type) {
    case types.FETCH_BANNERS:
      return {
        ...state,
        banners: action.payload,
        loading: false,
      };
  }
  return newState;
};
export default reducer;
