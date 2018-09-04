import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '40px auto',
    width: '50%',
    minWidth: '100px',
    maxWidth: '200px',
  },
})

function CircularIndeterminate(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CircularIndeterminate)
