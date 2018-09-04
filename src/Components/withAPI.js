import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchFeedbacks } from '../Store/Feedbacks/FeedbacksActions'

import {
  submitFeedback,
  disableSubmit,
} from '../Store/SubmitFeedback/SubmitFeedbackActions'

const withAPI = PropOptions => WrappedComponent => {
  class withAPI extends Component {
    componentDidMount() {
      const { feedbacks } = this.props
      if (!feedbacks.length) {
        this.fetchFeedbacks()
      }
    }

    fetchFeedbacks() {
      const { lastDoc, fetchFeedbacks } = this.props
      fetchFeedbacks(lastDoc)
    }

    handleSubmitClick() {
      const { submitFeedback, disableSubmit, form } = this.props
      const now = JSON.stringify(Date.now())
      form.time = now

      disableSubmit(disableSubmit)
      submitFeedback(form)
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleSubmitClick={feedback => this.handleSubmitClick(feedback)}
          fetchFeedbacks={() => this.fetchFeedbacks()}
        />
      )
    }
  }

  const mapStateToProps = state => {
    return {
      feedbacks: state.feedbacks.arr,
      lastDoc: state.feedbacks.lastDoc,
      form: state.submitFeedback.form,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchFeedbacks: bindActionCreators(fetchFeedbacks, dispatch),
      submitFeedback: bindActionCreators(submitFeedback, dispatch),
      disableSubmit: bindActionCreators(disableSubmit, dispatch),
    }
  }

  const enhance = compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )

  return enhance(withAPI)
}

export default withAPI

withAPI.propTypes = {
  headerName: PropTypes.string.isRequired,
  feedbacks: PropTypes.array.isRequired,
}
