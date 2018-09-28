import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
  loader: () => import('./App'),
  loading: () => <h3>Loading...</h3>
})

class App extends Component {
  render() {
    return <LoadableComponent />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
