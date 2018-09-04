import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '40px auto',
    width: '50%',
    minWidth: '400px',
    maxWidth: '500px',
  },
})

const FeedbackCard = ({ classes, feedback }) => (
  <Paper className={classes.root} elevation={10}>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {feedback.name ? feedback.name : 'Anonymous'}
      </Typography>
      <Typography component="p">{feedback.feedback}</Typography>
    </CardContent>
  </Paper>
)

FeedbackCard.propTypes = {
  classes: PropTypes.object.isRequired,
  feedback: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeedbackCard)
