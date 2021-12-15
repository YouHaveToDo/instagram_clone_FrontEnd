import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import styled from "styled-components";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//---- Pages ----
import Main from "../pages/Main";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Route path="/main" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
