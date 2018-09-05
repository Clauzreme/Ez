import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Header from '../../Components/Header/Header'
import PaperContainer from '../../Components/mui/PaperContainer'

import withContainer from '../../Components/withContainer'

import './Main.css'

class Main extends Component {
  render() {
    const { headerName } = this.props
    return (
      <Fragment>
        <Header headerName={headerName} />
        <PaperContainer>
          <h1>Ez</h1>
          <p>
            Ez is object-oriented programming language that is designed to be to
            be the eziest programming language in the world!
          </p>
          <p>
            If you are feeling generous, please feel free to give me{' '}
            <Link to={'/feedback'} className="inlineLink">
              feedback
            </Link>{' '}
            :)
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
  withContainer({ name: 'Main' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Main)

Main.propTypes = {
  headerName: PropTypes.string.isRequired,
}
