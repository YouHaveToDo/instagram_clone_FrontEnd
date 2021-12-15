import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";
import Insta from "../images/instagram.png";
import Applestore from "../images/applestore.png";
import Playstore from "../images/playstore.png";
import Facebook from "../images/facebook.svg";
import FacebookW from "../images/facebookW.png";
import iphone from "../images/iphone.png";

const Signup = () => {
  return (
    <React.Fragment>
      <Grid
        width="350px"
        height="618px"
        flex
        background="#fff"
        direction="column"
        margin="30px auto"
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
          <Grid>
            <Text
              weight="900"
              color="#8e8e8e"
              align="center"
              size="17px"
              width="268px"
              margin="20px auto 0 auto"
            >
              친구들의 사진과 동영상을 보려면 가입하세요.
            </Text>
          </Grid>
          <Grid flex justify="center">
            <Button
              text="Facebook으로 로그인"
              border="none"
              width="268px"
              margin="8px 0 8px 0"
              height="30px"
              color="#fff"
              background="#0095f6"
              radius="5px"
              bold="bold"
              line="30px"
              display="flex"
              justify="center"
              items="center"
            >
              <MiniImg src={FacebookW}></MiniImg>
            </Button>
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
          <Grid is_flex direction="column" justify="center" margin="25px 0 0 0">
            <Input
              width="268px"
              padding="9px 5px 7px 5px "
              height="36px"
              placeholder="이메일"
              radius="3px"
              border="1px solid #DBDBDB"
              background="#FAFAFA"
            />
            <Input
              width="268px"
              margin="6px 0 0 0"
              padding="9px 5px 7px 5px "
              height="36px"
              placeholder="사용자 이름"
              radius="3px"
              border="1px solid #DBDBDB"
              background="#FAFAFA"
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
            />
            <Button
              text="가입"
              border="none"
              width="268px"
              margin="13px 0 8px 0"
              height="30px"
              color="#fff"
              background="rgba(0,149,246,.3)"
              radius="5px"
              bold="bold"
            />
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
            계정이 있으신가요?<Span>로그인</Span>
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
    </React.Fragment>
  );
};

const LogoImg = styled.img`
  width: 175px;
  height: 51px;
`;
const MiniImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
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

export default Signup;
