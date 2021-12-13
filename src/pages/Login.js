import React from "react";
import styled, { keyframes } from "styled-components";
import LoginPng from "../images/login_Image.png";
import LoveLogo from "../images/love_logo.png";
import { Grid, Text, Input, Button } from "../elements/index_02";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const [username, setId] = React.useState("");
  const [password, setPwd] = React.useState("");

  const login = () => {
    if (username === "" || password === "") {
      window.alert("아이디, 패스워드 모두 입력해주세요 🥸");
      return;
    }

    dispatch(userActions.loginDB(username, password));
  };

  return (
    <React.Fragment>
      <LoginBox>
        <LoginLoveImage />
        <LoginImage />
        <LoginTitle>연애의 참견</LoginTitle>
        <LoginForm>
          <Grid>
            <Text color="#cccccc">아이디</Text>
            <Input
              Pcolor="#555"
              type="text"
              placeholder=""
              _onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Grid>
          <Grid margin="1.7rem 0 0 0">
            <Text color="#cccccc">비밀번호</Text>
            <Input
              FF="Open Sans"
              type="password"
              Pcolor="#555"
              placeholder=""
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </Grid>
        </LoginForm>
      </LoginBox>
      <ButtonBox>
        <Button
          bgColor="#ff4b3a"
          color="#fff"
          text="로그인"
          _onClick={login}
        ></Button>
        <Button
          bgColor="#fff"
          color="#fa4a0c"
          margin="1.2rem 0 0 0"
          text="회원가입"
          _onClick={() => {
            history.push("/Signup");
          }}
        ></Button>
      </ButtonBox>
    </React.Fragment>
  );
};

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const jump = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.7)
  }
  100% {
    transform: scale(1)
  }
  50% {
    transform: scale(0.7)
  }
  0% {
    transform: scale(1)
  }
`;

const LoginBox = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginImage = styled.div`
  margin-top: 3rem;
  width: 16rem;
  height: 16rem;
  background-color: #ff4b3a;
  background-image: url(${LoginPng});
  background-position: left top;
  background-size: 112%;
  border-radius: 100%;
  animation: ${fadein} 1s;
  box-shadow: 0px 5px 10px rgba(255, 75, 58, 0.7);
`;

const LoginLoveImage = styled.div`
  width: 8rem;
  height: 7.5rem;
  position: absolute;
  right: 50px;
  top: 2rem;
  z-index: 9999;
  background-image: url(${LoveLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${jump} infinite 1.25s;
`;

const LoginTitle = styled.h1`
  font-size: 24px;
  margin: 2rem 0;
  z-index: 999;
`;

const LoginForm = styled.div`
  width: 70%;
  height: auto;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${fadein} 1s;
`;

export default Login;
