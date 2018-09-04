export const fetchFeedbacks = options => {
  return {
    type: 'Feedbacks//fetchFeedbacks',
    options,
  }
}

export const fetchFeedbacksSuccess = options => {
  return {
    type: 'Feedbacks//fetchFeedbacksSuccess',
    newFeedbacks: options.newFeedbacks,
    newLastDoc: options.newLastDoc,
  }
}

export const fetchFeedbacksFailure = () => {
  return {
    type: 'Feedbacks//fetchFeedbacksFailure',
  }
}
export const prependFeedback = feedback => {
  return {
    type: 'prependFeedback',
    feedback,
  }
}
