import React, { useCallback } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Post from "../components/Post";
import Aside from "../components/Aside";

import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/module/post";

const Maintest = (props) => {
  // const disPatch = useDispatch();
  // //-- state --
  // const [result, setResult] = React.useState([]); // 데이터를 담을 state
  // const [item, setItem] = React.useState([]); //백에 요청한 데이터 (원본데이터)
  // const [isLoding, setIsLoding] = React.useState(true); // 로딩판별
  //포스트 리스트 가져오기
  // const post_list = useSelector((state) => state.post.posts);
  // const post_cut = useSelector((state) => state.post.partialArticles);
  // console.log(post_list);
  // console.log(post_cut);
  // //스크롤시 추가적인 데이터 받아오기
  // const fetchMoreData = async () => {
  //   setIsLoding(true);
  //   setResult(result.concat(item.slice(0, 20))); //20개씩 컷팅
  //   setItem(item.slice(20)); //원본데이터도 잘라주므로 데이터양을 최소화
  //   setIsLoding(false);
  // };
  // const _infiniteScroll = useCallback(() => {
  //   //clientHeight = 사용자가 지금 보는 높이
  //   let scrollHeight = Math.max(
  //     document.documentElement.scrollHeight,
  //     document.body.scrollHeight
  //   );
  //   //scrollTop = 사용자가 보는 페이지와 원래 페이지의 최상단과의 차이
  //   let scrollTop = Math.max(
  //     document.documentElement.scrollTop,
  //     document.body.scrollTop
  //   );
  //   //scrollHeight = 화면의 높이값
  //   let clientHight = document.documentElement.clientHight;
  //   scrollHeight -= 100;
  //   if(scrollTop+clientHight>=scrollHeight&& isLoding === false){
  //     fetchMoreData()
  //   })
  // },[isLoding]);
  //첫 번째 useEffect는 데이터를 처음에 받아오기 위해서 deps에 아무것도 넣지않고 1회 실행
  // React.useEffect(()=>{
  //   //백 요청
  //   // getFetchData();
  // },[])
  // 두 번째 useEffect는 scrollEvent 부착을 위해 _infiniteScroll을 deps로 넣고 실행
  // React.useEffect(()=>{
  //   window.addEventListener('scroll',_infiniteScroll,true);
  //   return()=> window.addEventListener('scroll',_infiniteScroll,true);
  // },[_infiniteScroll])
  //-----------------------------------------------------------------
  // return (
  //   <MainBox>
  //     <Header />
  //     <Section>
  //       {/* post */}
  //       <PostBox>
  //         {post_cut.map((p, idx) => {
  //           return (
  //             <div key={idx}>
  //               <Post post={post_list} {...p} />
  //             </div>
  //           );
  //         })}
  //       </PostBox>
  //       <AsideBox>
  //         <Aside />
  //       </AsideBox>
  //     </Section>
  //   </MainBox>
  // );
};

// const MainBox = styled.div`
//   /* width: 100vw; */
//   height: 100%;
//   background-color: #fafafa;
//   /* background-color: red; */
//   /* background-color: red; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const Section = styled.div`
//   width: 935px;
//   height: 100%;
//   /* background: red; */
//   display: flex;
// `;
// const PostBox = styled.div`
//   /* position: absolute; */
//   width: 100vw;
//   max-width: 614px;
//   margin-right: 28px;
//   margin-top: 100px;
//   /* background-color: #fff; */
// `;
// const AsideBox = styled.div`
//   width: 293px;
//   /* background-color: red; */
//   position: fixed;
//   left: calc(100vw - 40vw);
//   top: 110px;
// `;

// export default Maintest;
