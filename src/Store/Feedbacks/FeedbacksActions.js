export const fetchFeedbacks = options => {
  return {
    type: 'Feedbacks//fetchFeedbacks',
    options,
  }
}

export const fetchFeedbacksSuccess = options => {
  console.log('opt', options)
  return {
    type: 'Feedbacks//fetchFeedbacksSuccess',
    feedbacks: options.feedbacks,
    lastDoc: options.lastDoc,
  }
}

export const fetchFeedbacksFailure = () => {
  return {
    type: 'Feedbacks//fetchFeedbacksFailure',
  }
}
