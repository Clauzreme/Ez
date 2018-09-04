import React, { Component, Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'
import FeedbackForm from '../../Components/mui/FeedbackForm'
import FeedbackList from '../../Components/FeedbackList/FeedbackList'

import withContainer from '../../Components/withContainer'
import withAPI from '../../Components/withAPI'

import { updateFeedbackForm } from '../../Store/SubmitFeedback/SubmitFeedbackActions'

import './Feedback.css'

class Feedback extends Component {
  handleInputChange(event, type) {
    const { form, updateFeedbackForm } = this.props
    form[type] = event.target.value
    updateFeedbackForm(form)
  }

  handleCheckboxChange() {
    const { form, updateFeedbackForm } = this.props
    form.hidden = !form.hidden
    updateFeedbackForm(form)
  }

  render() {
    const {
      headerName,
      handleSubmitClick,
      feedbacks,
      fetchFeedbacks,
      form: { name, email, feedback, hidden },
    } = this.props

    console.log(name, email, feedback, hidden)

    return (
      <Fragment>
        <Header headerName={headerName} />
        <FeedbackForm
          handleInputChange={(event, type) =>
            this.handleInputChange(event, type)
          }
          handleCheckboxChange={() => this.handleCheckboxChange()}
          handleSubmitClick={() => handleSubmitClick()}
          name={name}
          email={email}
          feedback={feedback}
          hidden={hidden}
        />
        <FeedbackList feedbacks={feedbacks} fetchFeedbacks={fetchFeedbacks} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    updateFeedbackForm: bindActionCreators(updateFeedbackForm, dispatch),
  }
}

const enhance = compose(
  withContainer({ name: 'Feedback' }),
  withAPI(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Feedback)

Feedback.propTypes = {
  headerName: PropTypes.string.isRequired,
  fetchFeedbacks: PropTypes.func.isRequired,
}
