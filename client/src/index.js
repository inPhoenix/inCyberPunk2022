import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { configureStore } from "./store/configureStore"
import App from "./App"
import ScrollToTop from "./common/util/ScrollToTop"

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}


// Render once
render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
  })
}
