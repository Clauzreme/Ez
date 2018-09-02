import React from 'react'
import { render } from 'react-dom'
import Router from './components/Router'
import { Provider } from 'react-redux'
import { blue500 } from 'material-ui/styles/colors'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { store, persistor } from './store'

import './style.css'

import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'

import './index.scss'
import registerServiceWorker from './registerServiceWorker'

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
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>
)

render(<App />, document.querySelector('#root'))
registerServiceWorker()
