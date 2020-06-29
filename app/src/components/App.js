// react imports
import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "react-error-boundary";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

// react spectrum components
import { Provider } from "@react-spectrum/provider";
import { theme } from "@react-spectrum/theme-default";
import { Grid, Flex } from "@react-spectrum/layout";
import { View } from "@react-spectrum/view";
import { Sidebar } from "./Sidebar";
import { PageForm } from "./Form";
import { PageAbout } from "./About";

function App() {
  return (
    <Router>
      <Provider theme={theme}>
        <Grid
          areas={["sidebar content"]}
          columns={["size-3000", "auto"]}
          rows={["100vh"]}
          gap="size-100"
        >
          <View gridArea="sidebar">
            <Sidebar></Sidebar>
          </View>
          <View gridArea="content">
            <Flex direction="row" justifyContent="center" height="100%">
              <View width="size-6000">
                <Switch>
                  <Route path="/about">
                    <PageAbout />
                  </Route>
                  <Route path="/">
                    <PageForm />
                  </Route>
                </Switch>
              </View>
            </Flex>
          </View>
        </Grid>
      </Provider>
    </Router>
  );
}

export default App;
