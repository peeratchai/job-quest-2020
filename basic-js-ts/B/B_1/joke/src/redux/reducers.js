import { JOKE_STORE, REQUESTED_FAILED } from './actions';

const initialState = {
  joke: null,
  error: null
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case JOKE_STORE:
      return {
        ...state,
        joke: action.payload
      };
    case REQUESTED_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}