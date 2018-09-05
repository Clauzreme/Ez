import React, { Component, Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'
import FeedbackForm from '../../Components/mui/FeedbackForm'
import Progress from '../../Components/mui/Progress'
import Dialog from '../../Components/mui/Dialog'
import FeedbackList from '../../Components/FeedbackList/FeedbackList'

import withContainer from '../../Components/withContainer'
import withAPI from '../../Components/withAPI'

import { updateFeedbackForm } from '../../Store/SubmitFeedback/SubmitFeedbackActions'

import './Feedback.css'

class Feedback extends Component {
  state = {
    dialogOpen: false,
  }

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

  handleSubmitClick() {
    const { handleSubmitClick, form } = this.props

    if (form.feedback) {
      handleSubmitClick()
    } else {
      this.setState({
        dialogOpen: true,
      })
    }
  }

  handleDialogClose() {
    this.setState({
      dialogOpen: false,
    })
  }

  render() {
    const {
      headerName,
      feedbacks,
      fetchFeedbacks,
      form: { name, feedback, hidden },
    } = this.props

    const { dialogOpen } = this.state

    return (
      <Fragment>
        <Header headerName={headerName} />
        <Dialog
          open={dialogOpen}
          handleClose={() => this.handleDialogClose()}
        />
        <FeedbackForm
          handleInputChange={(event, type) =>
            this.handleInputChange(event, type)
          }
          handleCheckboxChange={() => this.handleCheckboxChange()}
          handleSubmitClick={() => this.handleSubmitClick()}
          name={name}
          feedback={feedback}
          hidden={hidden}
        />
        {feedbacks.length ? (
          <FeedbackList feedbacks={feedbacks} fetchFeedbacks={fetchFeedbacks} />
        ) : (
          <Progress />
        )}
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
