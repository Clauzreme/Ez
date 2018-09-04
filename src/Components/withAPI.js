import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchFeedbacks } from '../Store/Feedbacks/FeedbacksActions'

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

    componentDidUpdate(a, b, c) {
      console.log(a, b, c, 'abc')
    }

    handleSubmitClick(feedback) {
      // const now = JSON.stringify(Date.now())
      // feedback.time = now
      // db.collection('feedback')
      //   .doc(now)
      //   .set(feedback)
      //   .then(() => {
      //     console.log('Document successfully written!')
      //   })
      //   .catch(error => {
      //     console.error('Error writing document: ', error)
      //   })
    }

    render() {
      console.log(this.props)
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
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchFeedbacks: bindActionCreators(fetchFeedbacks, dispatch),
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
