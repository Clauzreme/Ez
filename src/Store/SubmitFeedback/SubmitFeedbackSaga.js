import { call, put } from 'redux-saga/effects'

import {
  submitFeedbackSuccess,
  submitFeedbackFailure,
} from './SubmitFeedbackActions'

export function* submitFeedback(api, action) {
  try {
    const response = yield call(api.submitFeedback, action.options)
    yield put(submitFeedbackSuccess(response))
  } catch (error) {
    yield put(submitFeedbackFailure(error))
  }
}
