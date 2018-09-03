import React, { Component, Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'
import FeedbackForm from '../../Components/mui/FeedbackForm'

import withContainer from '../../Components/withContainer'
import withAPI from '../../Components/withAPI'

import './Feedback.scss'

class Feedback extends Component {
  state = {
    name: '',
    email: '',
    feedback: '',
    hidden: false,
  }

  handleInputChange(event, type) {
    this.setState({
      [type]: event.target.value,
    })
  }

  handleCheckboxChange() {
    const { hidden } = this.state
    this.setState({
      hidden: !hidden,
    })
  }

  render() {
    const { headerName, handleSubmitClick } = this.props
    const { name, email, feedback, hidden } = this.state

    return (
      <Fragment>
        <Header headerName={headerName} />
        <FeedbackForm
          handleInputChange={(event, type) =>
            this.handleInputChange(event, type)
          }
          handleCheckboxChange={() => this.handleCheckboxChange()}
          handleSubmitClick={() => handleSubmitClick(this.state)}
          name={name}
          email={email}
          feedback={feedback}
          hidden={hidden}
        />
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
  withAPI(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Feedback)

Feedback.propTypes = {
  headerName: PropTypes.string.isRequired,
}
