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
          <h2>Printing out 'Hello World' in Ez is pretty easy:</h2>
          <p className="code">print('Hello World')</p>
          <p>
            There is also another variant of{' '}
            <span className="code">print()</span> which is{' '}
            <span className="code">log()</span>
          </p>
          <p>
            The difference between these two is that{' '}
            <span className="code">log()</span> works only in development
            (non-compiled version) while <span className="code">print()</span>{' '}
            works everywhere.
          </p>
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
