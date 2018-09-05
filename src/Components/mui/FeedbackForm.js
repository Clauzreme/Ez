import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '20px auto 0',
    width: '50%',
    minWidth: '400px',
    maxWidth: '500px',
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class FeedbackForm extends React.Component {
  render() {
    const {
      classes,
      handleInputChange,
      handleCheckboxChange,
      handleSubmitClick,
      name,
      feedback,
      hidden,
    } = this.props

    return (
      <Paper className={classes.root} elevation={10}>
        <Typography variant="headline" component="h3">
          Send a feedback or a suggestion
        </Typography>
        <TextField
          label="Name (optional)"
          value={name}
          placeholder="public name"
          fullWidth
          className={classes.textField}
          margin="normal"
          onChange={event => handleInputChange(event, 'name')}
        />
        <TextField
          label="Feedback"
          value={feedback}
          placeholder="thanks"
          fullWidth
          multiline
          className={classes.textField}
          margin="normal"
          onChange={event => handleInputChange(event, 'feedback')}
        />
        <div className="flex">
          <FormControlLabel
            control={
              <Checkbox
                checked={hidden}
                onChange={() => handleCheckboxChange()}
                color="primary"
              />
            }
            label="Hidden Feedback"
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleSubmitClick()}
          >
            Submit
          </Button>
        </div>
      </Paper>
    )
  }
}

FeedbackForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
}

export default withStyles(styles)(FeedbackForm)
