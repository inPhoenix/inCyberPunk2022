import React, { Component } from "react"
import { BrowserRouter, withRouter } from "react-router-dom"
import MainRouter from "./MainRouter"
import { connect, Provider } from "react-redux"
import { configureStore } from "./store/configureStore"
import { ThemeProvider, createTheme } from 'arwes';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './style.scss'

const store = configureStore()

// https://github.com/arwesjs/arwes/blob/master/packages/arwes/src/tools/createTheme/theme.js

const myTheme = {
  animTime: 250,
  color: {
    primary: {
      base: '#be26fc',
      dark: '#8e1bbd',
      light: '#c95bf6'
    },
    header: {
      base: '#fc26fa',
      dark: '#a818a7',
      light: '#f458f2'
    },
    animate: {
      primary: {
        base: '#030021',
      },
      base: '#030021',
    }
  },

};


const App = () => (
  <ThemeProvider theme={createTheme(myTheme)}>
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)

const mapState = state => {
  return {
    placeholder: state
  }
}
export default withRouter(connect(mapState)(App))
