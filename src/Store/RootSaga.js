import { all, takeLatest } from 'redux-saga/effects'

import * as FeedbacksSaga from './Feedbacks/FeedbacksSaga'

import api from '../api/api'

export default function* rootSaga() {
  yield all([
    takeLatest('Feedbacks//fetchFeedbacks', FeedbacksSaga.fetchFeedbacks, api),
  ])
}
