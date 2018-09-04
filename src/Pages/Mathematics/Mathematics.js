import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '../../Components/Header/Header'
import PaperContainer from '../../Components/mui/PaperContainer'

import withContainer from '../../Components/withContainer'

import './Mathematics.css'

class Mathematics extends Component {
  render() {
    const { headerName } = this.props
    return (
      <Fragment>
        <Header headerName={headerName} />
        <PaperContainer>
          <h2>Expressions and operators in Mathematics</h2>
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
  withContainer({ name: 'Mathematics' }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(Mathematics)

Mathematics.propTypes = {
  headerName: PropTypes.string.isRequired,
}
