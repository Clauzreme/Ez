import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../Components/Header/Header'

import withContainer from '../../Components/withContainer'

import './Main.scss'

class Main extends Component {
  render() {
    return (
      <div className="wrapper__main">
        <Header />
      </div>
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
  withContainer(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Main)
