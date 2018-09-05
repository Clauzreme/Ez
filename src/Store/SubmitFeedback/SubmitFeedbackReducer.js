const INITIAL_STATE = {
  form: {
    name: '',
    feedback: '',
    hidden: false,
  },
  submitDisabled: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SubmitFeedback//submitFeedbackSuccess':
      return {
        ...state,
        form: {
          name: '',
          feedback: '',
          hidden: false,
        },
        submitDisabled: false,
      }
    case 'SubmitFeedback//submitFeedbackFailure':
      return {
        ...state,
        submitDisabled: false,
      }
    case 'SubmitFeedback//disableSubmit':
      return {
        ...state,
        submitDisabled: true,
      }
    case 'SubmitFeedback//updateFeedbackForm':
      return {
        ...state,
        form: {
          name: action.form.name,
          feedback: action.form.feedback,
          hidden: action.form.hidden,
        },
      }
    default:
      return state
  }
}
