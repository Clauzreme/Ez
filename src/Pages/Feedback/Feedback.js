import React, { Component, Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'
import FeedbackForm from '../../Components/mui/FeedbackForm'

import withContainer from '../../Components/withContainer'

import './Feedback.scss'

class Feedback extends Component {
  state = {
    name: '',
    email: '',
    feedback: '',
    checkbox: false,
  }

  handleInputChange() {}

  handleCheckboxChange() {}

  handleSubmitClick() {}

  render() {
    const { headerName } = this.props
    const { name, email, feedback, checkbox } = this.state

    return (
      <Fragment>
        <Header
          headerName={headerName}
          handleInputChange={() => this.handleInputChange()}
          handleCheckboxChange={() => this.handleCheckboxChange()}
          handleSubmitClick={() => this.handleSubmitClick()}
          name={checkbox}
          email={checkbox}
          feedback={checkbox}
          checkbox={checkbox}
        />
        <FeedbackForm />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const enhance = compose(
  withContainer({ name: 'Feedback' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Feedback)

Feedback.propTypes = {
  headerName: PropTypes.string.isRequired,
}
