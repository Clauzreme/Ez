import React, { Component, Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'

import Drawer from './mui/Drawer'

import { setDrawerList } from '../store/MuiLists/MuiListsActions'

const withContainer = PropOptions => WrappedComponent => {
  class withContainer extends Component {
    handleClick(idx) {
      const { drawerList, setDrawerList } = this.props
      drawerList[idx] = !drawerList[idx]

      setDrawerList(drawerList)

      this.setState({})
    }

    render() {
      const { drawerList } = this.props

      return (
        <Fragment>
          <Drawer
            handleClick={idx => this.handleClick(idx)}
            drawerList={drawerList}
          />
          <div className="rightSide">
            <WrappedComponent {...this.props} />
          </div>
        </Fragment>
      )
    }
  }

  const mapStateToProps = state => {
    return {
      drawerList: state.muiLists.drawerList,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      setDrawerList: bindActionCreators(setDrawerList, dispatch),
    }
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

withContainer.propTypes = {
  setDrawerList: PropTypes.func.isRequired,
  drawerList: PropTypes.array.isRequired,
}
