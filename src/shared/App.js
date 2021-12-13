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
      <MobileBox>
        <ConnectedRouter history={history}>
          {/* 여기서부터 컴포넌트 넣으시면 됩니다.  */}
        </ConnectedRouter>
      </MobileBox>
    </React.Fragment>
  );
}

const MobileBox = styled.div`
  max-width: 414px;
  max-height: 896px;
  width: 98%;
  height: 98%;
  border-radius: 30px;
  border: 2px solid #efefef;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export default App;
