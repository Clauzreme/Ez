import { call, put } from 'redux-saga/effects'

import { fetchDealsSuccess, fetchDealsFailure } from './FeedbacksActions'

export function* fetchFeedbacks(api, action) {
  try {
    const response = yield call(api.fetchFeedbacks, action.options)
    yield put(fetchDealsSuccess(response))
  } catch (error) {
    yield put(fetchDealsFailure(error))
  }
}
