import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import styled from "styled-components";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import CreateSelect from "../pages/CreateSelect";
import CreateDetails from "../pages/CreateDetails";
// import Maintest from "../pages/Maintest";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        {/* <Route path="/" exact component={} /> */}

        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/main/detail/:post_id" component={Detail} />
        {/* 여기서부터 컴포넌트 넣으시면 됩니다.  */}
        <Route path="/main" component={Main} />
        <Route path="/main/create/select" component={CreateSelect} />
        <Route path="/main/create/details" component={CreateDetails} />
        {/* <Route path="/test" component={Maintest} /> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
