import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import styled from "styled-components";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";
import Main from "../pages/Main";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        {/* <Route path="/" exact component={} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Signup} />
        <Route path="/Detail" exact component={Detail} />
        {/* 여기서부터 컴포넌트 넣으시면 됩니다.  */}
        <Route path="/main" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
