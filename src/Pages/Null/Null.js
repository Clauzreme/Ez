import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'

import withContainer from '../../Components/withContainer'

import './Null.css'

class Null extends Component {
  render() {
    const { headerName } = this.props
    return (
      <Fragment>
        <Header headerName={headerName} />
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
  withContainer({ name: 'Null' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Null)

Null.propTypes = {
  headerName: PropTypes.string.isRequired,
}
