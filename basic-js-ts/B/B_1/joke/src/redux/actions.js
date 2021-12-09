export const JOKE_FETCH_REQUESTED = 'JOKE_FETCH_REQUESTED';
export const JOKE_STORE = 'JOKE_STORE';
export const REQUESTED_FAILED = 'REQUESTED_FAILED';

export function addJoke(joke) {
  return {
    type: JOKE_FETCH_REQUESTED,
    payload: joke
  };
}