import React, { Component } from 'react'
import { JssProvider } from 'react-jss'
import { create as createJss } from 'jss'
import jssPreset from 'jss-preset-default'
import { createGenerateClassName } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ExampleComponent from '{{name}}'

const jss = createJss(jssPreset())

const generateClassName = createGenerateClassName()

export default class App extends Component {
  render() {
    return (
      <JssProvider
        jss={ jss }
        generateClassName={ generateClassName }
      >
        <div>
          <CssBaseline />
          <ExampleComponent />
        </div>
      </JssProvider>
    )
  }
}
