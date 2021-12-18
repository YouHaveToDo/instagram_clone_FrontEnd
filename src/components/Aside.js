import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button, Grid, Image, Text } from "../elements/Index";
import { useDispatch } from "react-redux";
import { delToken } from "../shared/token";
import { history } from "../redux/configureStore";

const Aside = (props) => {
  const dispatch = useDispatch();
  const localData = localStorage.getItem("MY_LOCAL");

  const [name, setName] = useState([
    "길재원",
    "김금동",
    "이성진",
    "장익상",
    "정종찬",
    "최수인",
  ]);

  const logout = () => {
    localStorage.removeItem("MY_LOCAL");
    delToken("login");
    history.replace("/");
  };
  return (
    <React.Fragment>
      <UserBox width="100%">
        <Userinfo>
          <Image shape="circle" src={props.src} size="56" />
          <Grid flex justify="space-between">
            <Text bold padding="0 0 0 10px" fontWeight="bold">
              {localData}
            </Text>
            <Button
              bold
              text="로그아웃"
              background="none"
              border="none"
              color="red"
              _onClick={logout}
            ></Button>
          </Grid>
        </Userinfo>
        <Grid flex justify="space-between" padding="15px 0">
          <Text color="#8e8e8e" size="14px" fontWeight="bold">
            회원님을 위한 추천
          </Text>
          <Text size="12px" fontWeight="bold">
            모두 보기
          </Text>
        </Grid>

        {name.map((n, idx) => {
          return (
            <Userinfo>
              <Image shape="circle" src={props.src} />
              <Grid flex justify="space-between" padding="10px 0">
                <Text bold padding="0 0 0 10px" fontWeight="bold">
                  {n}
                </Text>
                <Button
                  bold
                  text="팔로우"
                  background="none"
                  border="none"
                  color="#0095f6"
                ></Button>
              </Grid>
            </Userinfo>
          );
        })}
      </UserBox>
      <Footer>
        <ul>
          <li>소개</li>
          <li>도움말홍보</li>
          <li>센터API채용</li>
          <li>정보개인정보처리방침</li>
          <li>약관</li>
          <li>위치</li>
          <li>인기</li>
        </ul>
        <p>© 2021 INSTAGRAM FROM META</p>
      </Footer>
    </React.Fragment>
  );
};
const UserBox = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  flex-direction: column;
`;
const Userinfo = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const Footer = styled.div`
  & ul {
    padding: 20px 16px 10px 16px;
    display: inline-block;
  }
  & li {
    float: left;
    font-size: 11px;
    padding: 0 2px;
    color: #c7c7c7;
    ::after {
      content: "·";
    }
  }

  & p {
    display: inline-block;
    font-size: 11px;
    color: #c7c7c7;
    padding: 0 16px;
  }
`;

export default Aside;
