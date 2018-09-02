import React, { Component, Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import Drawer from './mui/Drawer'

const withContainer = PropOptions => WrappedComponent => {
  class withContainer extends Component {
    componentDidMount() {}

    render() {
      return (
        <Fragment>
          <Drawer />
          <WrappedComponent {...this.props} />
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
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )

  return enhance(withContainer)
}

export default withContainer
