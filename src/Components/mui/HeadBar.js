import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

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

const HeadBar = ({ classes, headerName }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {headerName}
          </Typography>
          <Link to={'/feedback'}>
            <Button className={classes.marginRight} color="inherit">
              Feedback
            </Button>
          </Link>
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

export default withStyles(styles)(HeadBar)

HeadBar.propTypes = {
  classes: PropTypes.object.isRequired,
  headerName: PropTypes.string.isRequired,
}
