import { put, takeEvery, call, all } from 'redux-saga/effects'
import { JOKE_FETCH_REQUESTED, JOKE_STORE, REQUESTED_FAILED } from './actions';
import { getRandomJoke } from '../service/joke'

function* fetchJokeData(action) {
  try {
    const { response, error } = yield call(getRandomJoke, action.payload)
    if (response) {
      yield put({ type: JOKE_STORE, payload: response.data });
    } else {
      yield put({ type: REQUESTED_FAILED, payload: error });
    }
  } catch (error) {
    console.log('get random joke error', error)
  }
}

function* joke() {
  yield takeEvery(JOKE_FETCH_REQUESTED, fetchJokeData);
}


export default function* rootSaga() {
  yield all([
    joke()
  ])
  // code after all-effect
}