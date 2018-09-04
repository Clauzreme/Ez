export const submitFeedback = options => {
  return {
    type: 'SubmitFeedback//submitFeedback',
    options,
  }
}

export const updateFeedbackForm = form => {
  return {
    type: 'SubmitFeedback//updateFeedbackForm',
    form,
  }
}

export const submitFeedbackSuccess = () => {
  return {
    type: 'SubmitFeedback//submitFeedbackSuccess',
  }
}

export const submitFeedbackFailure = () => {
  return {
    type: 'SubmitFeedback//submitFeedbackFailure',
  }
}

export const disableSubmit = () => {
  return {
    type: 'SubmitFeedback//disableSubmit',
  }
}
