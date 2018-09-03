import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { Github } from '../../Assets'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  marginRight: {
    marginRight: '10px',
  },
  round: {
    borderRadius: '50%',
  },
}

const HeadBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            News
          </Typography>
          <Button className={classes.marginRight} color="inherit">
            Feedback
          </Button>
          <a href="https://github.com/Clauzreme/Ez" target="_blank">
            <Button color="inherit" className={classes.round}>
              <img src={Github} alt="Github" />
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}

HeadBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeadBar)
