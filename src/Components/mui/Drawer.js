import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { Link } from 'react-router-dom'

import DrawerList from './DrawerList'

const drawerWidth = 200

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
})

class MainDrawer extends React.Component {
  render() {
    const { classes, handleClick, drawerList } = this.props

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <Link
            to={{
              pathname: '/',
              name: 'Main',
            }}
          >
            <h1>Ez</h1>
          </Link>
        </div>
        <Divider />
        <DrawerList handleClick={handleClick} drawerList={drawerList} />
        <Divider />
        <List />
      </Drawer>
    )
  }
}

export default withStyles(styles)(MainDrawer)

MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  drawerList: PropTypes.array.isRequired,
}
