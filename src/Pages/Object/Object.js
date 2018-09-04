import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'

import withContainer from '../../Components/withContainer'

import './Object.css'

class ObjectComp extends Component {
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
  withContainer({ name: 'Object' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(ObjectComp)

ObjectComp.propTypes = {
  headerName: PropTypes.string.isRequired,
}
