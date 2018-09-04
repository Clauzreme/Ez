import React, { Fragment } from 'react'
import Waypoint from 'react-waypoint'
import PropTypes from 'prop-types'

import FeedbackCard from '../mui/FeedbackCard'

import './FeedbackList.scss'

const FeedbackList = ({ feedbacks, loadFeedback }) => {
  return (
    <Fragment>
      {feedbacks.map((feedback, id) => (
        <FeedbackCard feedback={feedback} key={id} />
      ))},
      <Waypoint onEnter={loadFeedback} />
    </Fragment>
  )
}

export default FeedbackList

FeedbackList.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  loadFeedback: PropTypes.func.isRequired,
}
