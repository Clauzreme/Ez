import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

const FeedbackCard = ({ classes, feedback }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {feedback.name ? feedback.name : 'Anonymous'}
      </Typography>
      <Typography component="p">{feedback.feedback}</Typography>
    </CardContent>
  </Card>
)

FeedbackCard.propTypes = {
  classes: PropTypes.object.isRequired,
  feedback: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeedbackCard)
