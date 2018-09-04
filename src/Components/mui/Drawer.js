import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
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
          <Link to={'/'}>
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
