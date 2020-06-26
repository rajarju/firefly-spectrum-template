// react imports
import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from 'react-error-boundary'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

// react spectrum components
import { Provider } from '@react-spectrum/provider'
import { theme } from '@react-spectrum/theme-default'
import { Grid } from '@react-spectrum/layout'
import { View } from '@react-spectrum/view'
import { Sidebar } from './Sidebar'
import { PageForm } from './Form'
import { PageAbout } from './About'


function App() {
  return (
    <Router>
    <Provider theme={theme}>
      <Grid
        areas={[
          'sidebar content',
        ]}
        columns={['size-3000', 'auto']}
        rows={['100vh']}
        gap='size-100'
        >
        <View gridArea="sidebar">
          <Sidebar></Sidebar>
        </View>
        <View gridArea="content">          
          <Switch>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Route path="/">
              <PageForm />
            </Route>
          </Switch>
        </View>
      </Grid>
    </Provider>
    </Router>
  );
}

export default App