import React from 'react'
import { render } from 'react-dom'
import Router from './Components/Router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { store, persistor } from './Store'

import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'

import './Utils/index.css'
import registerServiceWorker from './Utils/registerServiceWorker'

// persistor.purge()

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      paper: blue,
    },
  },
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
)

render(<App />, document.querySelector('#root'))
registerServiceWorker()
