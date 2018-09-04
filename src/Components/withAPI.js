import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import firebase from 'firebase'

import { saveFeedbacks } from '../Store/Feedbacks/FeedbacksActions'

require('firebase/firestore')

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
    componentDidMount() {
      const { feedbacks } = this.props
      if (!feedbacks.length) {
        this.loadFeedback()
      }
    }

    handleSubmitClick(feedback) {
      const now = JSON.stringify(Date.now())
      feedback.time = now
      db.collection('feedback')
        .doc(now)
        .set(feedback)
        .then(() => {
          console.log('Document successfully written!')
        })
        .catch(error => {
          console.error('Error writing document: ', error)
        })
    }

    loadFeedback() {
      const { saveFeedbacks, lastDoc } = this.props

      console.log(lastDoc)

      let dbRef

      if (lastDoc) {
        dbRef = db
          .collection('feedback')
          .where('hidden', '==', false)
          .orderBy('time', 'desc')
          .startAfter(lastDoc)
          .limit(25)
      } else {
        dbRef = db
          .collection('feedback')
          .where('hidden', '==', false)
          .orderBy('time', 'desc')
          .limit(25)
      }

      const newFeedbacks = []

      dbRef
        .get()
        .then(querySnapshot => {
          let newLastDoc
          querySnapshot.forEach(doc => {
            const data = doc.data()
            delete data.email
            delete data.hidden
            newLastDoc = doc
            newFeedbacks.push(data)
          })
          console.log(newLastDoc)
          saveFeedbacks(newFeedbacks, newLastDoc)
        })
        .catch(err => {
          console.log('Error getting documents: ', err)
        })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleSubmitClick={feedback => this.handleSubmitClick(feedback)}
          loadFeedback={() => this.loadFeedback()}
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

withAPI.propTypes = {
  headerName: PropTypes.string.isRequired,
  feedbacks: PropTypes.array.isRequired,
}
