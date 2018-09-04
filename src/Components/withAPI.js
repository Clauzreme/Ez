import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { db } from '../api/api'

import {
  fetchFeedbacks,
  prependFeedback,
} from '../Store/Feedbacks/FeedbacksActions'

import {
  submitFeedback,
  disableSubmit,
} from '../Store/SubmitFeedback/SubmitFeedbackActions'

const withAPI = PropOptions => WrappedComponent => {
  class withAPI extends Component {
    onUpdateListener() {
      const { prependFeedback } = this.props
      this.unlisten = db
        .collection('time')
        .doc('lastUpdated')
        .onSnapshot(doc => {
          const firstFeedback = this.props.feedbacks[0]
          if (doc.exists && firstFeedback) {
            const data = doc.data()
            if (data.time > firstFeedback.time) {
              prependFeedback(data)
            }
          }
        })
    }

    componentDidMount() {
      this.onUpdateListener()
      const { feedbacks } = this.props
      if (!feedbacks.length) {
        this.fetchFeedbacks()
      }
    }

    componenWillUnmount() {
      this.unlisten()
    }

    fetchFeedbacks() {
      const { lastDoc, fetchFeedbacks } = this.props
      fetchFeedbacks(lastDoc)
    }

    handleSubmitClick() {
      const { submitFeedback, disableSubmit, form } = this.props
      const now = Date.now()
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
      prependFeedback: bindActionCreators(prependFeedback, dispatch),
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
