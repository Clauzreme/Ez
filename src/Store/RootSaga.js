import { all, takeLatest } from 'redux-saga/effects'

import * as FeedbacksSaga from './Feedbacks/FeedbacksSaga'
import * as SubmitFeedbackSaga from './SubmitFeedback/SubmitFeedbackSaga'

import api from '../api/api'

export default function* rootSaga() {
  yield all([
    takeLatest('Feedbacks//fetchFeedbacks', FeedbacksSaga.fetchFeedbacks, api),
    takeLatest(
      'SubmitFeedback//SubmitFeedback',
      SubmitFeedbackSaga.submitFeedback,
      api,
    ),
  ])
}
