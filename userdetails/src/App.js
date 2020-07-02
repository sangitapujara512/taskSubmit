import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Wrapper from './components/Wrapper'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper />
      </Provider>
    )
  }
}
export default App


