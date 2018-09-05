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
          <h2>Ez has several arithmetic operators: </h2>
          <ul>
            <li>
              Assignment <span>(=)</span>
            </li>
            <li>
              Addition <span>(+)</span>
            </li>
            <li>
              Subtraction <span>(-)</span>
            </li>
            <li>
              Multiplication <span>(*)</span>
            </li>
            <li>
              Division <span>(/)</span>
            </li>
            <li>
              Remainder <span>(%)</span>
            </li>
            <li>
              FloorDivision <span>(//)</span>
            </li>
            <li>
              Exponentiation <span>(**)</span>
            </li>
          </ul>

          <PaperContainer>
            <h3>Addition </h3>
            <p>Examples:</p>
            <ul>
              <li>
                <span className="code">1 + 2 => 3</span>
              </li>
              <li>
                <span className="code">3 + 4 => 7</span>
              </li>
            </ul>
            <p>With Assignment operator :</p>
            <ul>
              <li>
                <span className="code">Shorthand: x += y</span>
              </li>
              <li>
                <span className="code">Full: x = x + y</span>
              </li>
            </ul>
          </PaperContainer>
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
