import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '40px auto',
    width: '90%',
  },
})

const PaperContainer = ({ classes, children }) => (
  <Paper className={classes.root} elevation={10}>
    {children}
  </Paper>
)

PaperContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PaperContainer)
