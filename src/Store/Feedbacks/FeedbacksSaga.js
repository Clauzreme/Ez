import { call, put } from 'redux-saga/effects'

import {
  fetchFeedbacksSuccess,
  fetchFeedbacksFailure,
} from './FeedbacksActions'

export function* fetchFeedbacks(api, action) {
  try {
    const response = yield call(api.fetchFeedbacks, action.options)
    yield put(fetchFeedbacksSuccess(response))
  } catch (error) {
    yield put(fetchFeedbacksFailure(error))
  }
}
