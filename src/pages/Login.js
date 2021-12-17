import React from "react";
import css from "../shared/App.css";
import styled, { keyframes } from "styled-components";
import Insta from "../images/instagram.png";
import Applestore from "../images/applestore.png";
import Playstore from "../images/playstore.png";
import Facebook from "../images/facebook.svg";
import iphone from "../images/iphone.png";
import Slider1 from "../images/slider1.jpeg";
import Slider2 from "../images/slider2.jpeg";
import Slider3 from "../images/slider3.jpeg";
import Slider4 from "../images/slider4.jpeg";
import { Grid, Text, Input, Button } from "../elements/Index";
import { userActions } from "../redux/module/user";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import Slider from "react-slick";

const Login = (props) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const dispatch = useDispatch();
  const emailRef = React.useRef("");
  const pwRef = React.useRef("");

  const login = () => {
    dispatch(userActions.loginDB(emailRef.current.value, pwRef.current.value));
    // 서버 연결되면 미들웨어쪽으로 이동하기
    dispatch(userActions.checkUserDB());
    // localStorage.setItem("MY_LOCAL", "here");
  };

  return (
    <React.Fragment>
      <Grid
        width="935px"
        margin="0 auto"
        flex
        padding="80px 0 0 0"
        justify="center"
      >
        <Grid width="454px" height="618px">
          <Iphone src={iphone} />
          <Position>
            {/* 슬라이더 일단 안쓰니깐 {...settings} 잠시 생략 */}
            <Slider>
              <div>
                <Iphone src={Slider1} />
              </div>
              <div>
                <Iphone src={Slider2} />
              </div>
              <div>
                <Iphone src={Slider3} />
              </div>
              <div>
                <Iphone src={Slider4} />
              </div>
            </Slider>
          </Position>
        </Grid>
        <Grid
          width="350px"
          height="618px"
          flex
          background="#fff"
          direction="column"
        >
          <Grid
            margin="25px 0 0 0"
            flex
            wrap
            direction="column"
            border="1px solid rgb(219, 219, 219)"
            padding="30px 0"
          >
            <Logo margin="0 auto">
              <LogoImg src={Insta} />
            </Logo>
            <Grid
              is_flex
              direction="column"
              justify="center"
              margin="25px 0 0 0"
            >
              <Input
                width="268px"
                padding="9px 5px 7px 5px "
                height="36px"
                placeholder="전화번화, 사용자 이름 또는 이메일"
                radius="3px"
                border="1px solid #DBDBDB"
                background="#FAFAFA"
                ref={emailRef}
              />
              <Input
                width="268px"
                margin="6px 0 0 0"
                padding="9px 5px 7px 5px "
                height="36px"
                placeholder="비밀번호"
                radius="3px"
                border="1px solid #DBDBDB"
                background="#FAFAFA"
                ref={pwRef}
              />
              <Button
                text="로그인"
                border="none"
                width="268px"
                margin="8px 0 8px 0"
                height="30px"
                color="#fff"
                background="rgba(0,149,246,.3)"
                radius="5px"
                bold="bold"
                _onClick={login}
              />
            </Grid>
            <Grid
              flex
              justify="space-around"
              items="center"
              margin="15px 0 0 0"
              padding="0 40px"
            >
              <div className="leftLine line"></div>
              <Text size="12px" color="#9C9C9C" weight="900">
                또는
              </Text>
              <div className="rightLine line"></div>
            </Grid>
            <Grid flex justify="center" items="flex-end" margin="25px 0 0 0">
              <MiniFacebook>
                <MiniImg src={Facebook} />
              </MiniFacebook>
              <Text margin="0 0 1px 5px" weight="bold" color="#385185">
                Facebook으로 로그인
              </Text>
            </Grid>
            <Grid margin="flex">
              <Text
                align="center"
                margin="20px 0 0 0"
                color="#00376b"
                size="12px"
              >
                비밀번호를 잊으셨나요?
              </Text>
            </Grid>
          </Grid>
          <Grid
            flex
            wrap
            direction="column"
            border="1px solid rgb(219, 219, 219)"
            padding="30px 0"
            margin="10px 0 0 0"
          >
            <Text size="14px" align="center" weight="500">
              계정이 없으신가요?
              <Span
                onClick={() => {
                  history.push("/signup");
                }}
              >
                가입하기
              </Span>
            </Text>
          </Grid>
          <Text align="center" padding="25px">
            앱을 다운로드하세요.
          </Text>
          <Grid flex justify="center">
            <StoreImg src={Applestore} />
            <StoreImg src={Playstore} style={{ marginLeft: "10px" }} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const LogoImg = styled.img`
  width: 175px;
  height: 51px;
`;
const MiniImg = styled.img`
  width: 20px;
  height: 20px;
`;
const StoreImg = styled.img`
  height: 40px;
`;
const Span = styled.span`
  color: #0095f6;
  margin-left: 5px;
  font-weight: 900;
`;
const Iphone = styled.img``;
const Position = styled.div`
  position: fixed;
  top: 180px;
  left: 709px;
`;
const Logo = styled.h1`
  width: 100%;
  height: 51px;
  background-repeat: no-repeat;
  background-position: 0 -130px;
  text-align: center;
`;
const MiniFacebook = styled.span`
  width: 20px;
  height: 20px;
`;

export default Login;
