import { call, put, takeLatest } from 'redux-saga/effects';
import { TagsApi } from '../../../services/api/tagsApi';
import { LoadingStatus } from '../../types';
import { setTags, setTagsLoadingStatus, TagsActionsType } from './actionCreators';

export function* fetchTagsRequest(): Generator<any,any,any> {
  try {
    const items = yield call(TagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tagsSaga(): Generator<any,any,any> {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
