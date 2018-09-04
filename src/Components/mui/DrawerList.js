import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { Link } from 'react-router-dom'

const listItems = {
  'Built-in Types': {
    String: '/string',
    Digit: '/digit',
    Float: '/float',
    Boolean: '/boolean',
    Undefined: '/undefined',
    Null: '/null',
    Array: '/array',
    Object: '/object',
    Set: '/set',
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
  render() {
    const { classes, handleClick, drawerList } = this.props

    return (
      <div className={classes.root}>
        <List component="nav">
          {Object.keys(listItems).map((key, idx) => {
            const val = listItems[key]
            if (typeof val === 'string') {
              return (
                <Link to={key} key={key}>
                  <ListItem button>
                    <ListItemText primary={key} />
                  </ListItem>
                </Link>
              )
            }

            return (
              <Fragment key={key}>
                <ListItem button onClick={() => handleClick(idx)}>
                  <ListItemText primary={key} />
                  {drawerList[idx] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={drawerList[idx]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {Object.keys(listItems[key]).map(nested => (
                      <Link to={val[nested]} key={nested}>
                        <ListItem button>
                          <ListItemText primary={nested} />
                        </ListItem>
                      </Link>
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

export default withStyles(styles)(DrawerList)

DrawerList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  drawerList: PropTypes.array.isRequired,
}
