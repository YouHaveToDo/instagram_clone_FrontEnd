import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Post from "../components/Post";
import Aside from "../components/Aside";
import { Grid } from "../elements/Index";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/module/post";

const Main = (props) => {
  const dispatch = useDispatch();

  // -- 로그인 유저 확인 및 데이터 요청 --
  // React.useEffect(() => {
  //   const localData = localStorage.getItem("MY_LOCAL");
  //   // 유저 정보 확인
  //   if (!localData) {
  //     window.alert("로그인이 필요합니다");
  //     history.push("/");
  //   }
  //   //포스트 요청
  //   dispatch(postActions.getPostDB());
  // }, []);

  //첫 실행시 포스트 요청

  console.log(props);
  const post_list = useSelector((state) => state.post.posts);
  console.log(post_list);
  return (
    <MainBox>
      <Header />
      <Section>
        {/* post */}
        <PostBox>
          {post_list.map((p, idx) => {
            return (
              <div key={idx}>
                <Post post={post_list} {...p} />
              </div>
            );
          })}
        </PostBox>
        <AsideBox>
          <Aside />
        </AsideBox>
      </Section>
    </MainBox>
  );
};
const MainBox = styled.div`
  /* width: 100vw; */
  height: 100%;
  background-color: #fafafa;
  /* background-color: red; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Section = styled.div`
  width: 935px;
  height: 100%;
  /* background: red; */
  display: flex;
`;
const PostBox = styled.div`
  /* position: absolute; */
  width: 100vw;
  max-width: 614px;
  margin-right: 28px;
  margin-top: 100px;
  /* background-color: #fff; */
`;
const AsideBox = styled.div`
  width: 293px;
  /* background-color: red; */
  position: fixed;
  left: calc(100vw - 40vw);
  top: 110px;
`;

export default Main;
