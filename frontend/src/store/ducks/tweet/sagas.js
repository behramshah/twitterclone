import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweetData, setTweetLoadingState } from './actionCreators';
import { TweetActionsType } from './contracts/actionTypes';
import { LoadingState } from './contracts/state';

export function* fetchTweetDataRequest({ payload: tweetId }) {
  try {
    const data = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
