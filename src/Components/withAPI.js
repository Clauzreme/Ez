import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import firebase from 'firebase'
require('firebase/firestore')

import { saveFeedbacks } from '../store/Feedbacks/FeedbacksActions'

firebase.initializeApp({
  apiKey: 'AIzaSyCnF305Sr5v0iGI6izB7r7uqjexUuJiY5k',
  authDomain: 'ezez-project.firebaseapp.com',
  projectId: 'ezez-project',
})

const db = firebase.firestore()

const settings = { /* your settings... */ timestampsInSnapshots: true }
db.settings(settings)

const withAPI = PropOptions => WrappedComponent => {
  class withAPI extends Component {
    componentDidMount() {}

    handleSubmitClick(feedback) {
      db.collection('feedback')
        .doc(JSON.stringify(Date.now()))
        .set(feedback)
        .then(() => {
          console.log('Document successfully written!')
        })
        .catch(error => {
          console.error('Error writing document: ', error)
        })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleSubmitClick={feedback => this.handleSubmitClick(feedback)}
        />
      )
    }
  }

  const mapStateToProps = state => {
    return {
      feedbacks: state.feedbacks.arr,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      saveFeedbacks: bindActionCreators(saveFeedbacks, dispatch),
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

// withAPI.propTypes = {
//   headerName: PropTypes.string.isRequired,
// }
