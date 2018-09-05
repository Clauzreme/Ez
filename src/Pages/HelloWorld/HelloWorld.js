import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'
import PaperContainer from '../../Components/mui/PaperContainer'

import withContainer from '../../Components/withContainer'

import './HelloWorld.css'

class HelloWorld extends Component {
  render() {
    const { headerName } = this.props
    return (
      <Fragment>
        <Header headerName={headerName} />
        <PaperContainer>
          <h2>'Hello World' in Ez:</h2>
        </PaperContainer>
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
  withContainer({ name: 'HelloWorld' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(HelloWorld)

HelloWorld.propTypes = {
  headerName: PropTypes.string.isRequired,
}
