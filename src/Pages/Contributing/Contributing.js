import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Header from '../../Components/Header/Header'
import PaperContainer from '../../Components/mui/PaperContainer'

import withContainer from '../../Components/withContainer'

import './Contributing.css'

class Contributing extends Component {
  render() {
    const { headerName } = this.props
    return (
      <Fragment>
        <Header headerName={headerName} />
        <PaperContainer>
          <h2>
            I would love to hear any{' '}
            <Link to={'/feedback'} className="inlineLink">
              feedback
            </Link>{' '}
            or{' '}
            <a
              href="https://github.com/EzLang/Ez/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="inlineLink"
            >
              contributing
            </a>{' '}
            you make. :)
          </h2>
          <h3>
            <a
              href="https://help.github.com/articles/about-pull-requests/"
              target="_blank"
              rel="noopener noreferrer"
              className="inlineLink"
            >
              About pull requests
            </a>
          </h3>
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
  withContainer({ name: 'Contributing' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Contributing)

Contributing.propTypes = {
  headerName: PropTypes.string.isRequired,
}
