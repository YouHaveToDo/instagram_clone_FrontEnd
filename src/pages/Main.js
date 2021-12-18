import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Post from "../components/Post";
import Aside from "../components/Aside";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/module/post";

const Main = (props) => {
  const post_list = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();

  // -- 로그인 유저 확인 및 데이터 요청 --
  React.useEffect(() => {
    const localData = localStorage.getItem("MY_LOCAL");
    // 유저 정보 확인
    if (!localData) {
      window.alert("로그인이 필요합니다");
      history.push("/");
    }
  }, []);
  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <MainBox>
      <Header />
      <Section>
        {/* post */}
        <PostBox>
          {post_list.map((p, idx) => {
            return (
              <div key={idx}>
                <Post post={post_list} {...p} idx={idx} post_id={p._id} />
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
  height: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Section = styled.div`
  width: 935px;
  height: 100%;
  display: flex;
`;
const PostBox = styled.div`
  width: 100vw;
  max-width: 614px;
  margin-right: 28px;
  margin-top: 100px;
`;
const AsideBox = styled.div`
  width: 293px;
  position: fixed;
  left: calc(100vw - 40vw);
  top: 110px;
`;

export default Main;
