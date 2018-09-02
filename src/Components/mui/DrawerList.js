import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'

import { Link } from 'react-router-dom'

const listItems = {
  'Built-in Types': {
    String: '/types/string',
    Digit: '/types/digit',
    Float: '/types/float',
    Boolean: '/types/boolean',
    Undefined: '/types/undefined',
    Null: '/types/null',
    Array: '/types/array',
    Object: '/types/object',
    Set: '/types/set',
  },
  Arithmetics: '/arithmetics',
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

class DrawerList extends React.Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <List component="nav">
          {Object.keys(listItems).map(key => {
            const val = listItems[key]
            if (typeof val === 'string') {
              return (
                <Link to={val} key={key}>
                  <ListItem button>
                    <ListItemText primary={key} />
                  </ListItem>
                </Link>
              )
            }
            return (
              <Fragment key={key}>
                <ListItem button onClick={this.handleClick}>
                  <ListItemText primary={key} />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {Object.keys(listItems[key]).map(key2 => (
                      <ListItem button key={key2}>
                        <ListItemText primary={key2} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Fragment>
            )
          })}
        </List>
      </div>
    )
  }
}

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DrawerList)
