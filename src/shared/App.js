import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import styled from "styled-components";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        {/* 여기서부터 컴포넌트 넣으시면 됩니다.  */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
