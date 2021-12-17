import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text, Input } from "../elements/Index";
import { useRef } from "react";
import PostModal from "./PostModal";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/module/post";
import DetailImg from "./DetailImage";
//-- icon --
import icon02 from "../images/icons/icon_02.png";
import icon05 from "../images/icons/icon_05.png";
import icon06 from "../images/icons/icon_06.png";
import icon07 from "../images/icons/icon_07.png";
import icon08 from "../images/icons/icon_08.png";

//date
import { returnGapDate } from "../shared/date";

const Post = (props) => {
  // const post_list = useSelector((state) => state.post.posts);
  const localData = localStorage.getItem("MY_LOCAL");
  console.log(localData);

  console.log(props);
  console.log(props.nickname);
  console.log(props.upload);
  console.log(props.upload[0].mimetype);
  const fileType = props.upload[0].mimetype;

  console.log(props.upload[0].path);
  console.log(props.upload.mimetype);
  console.log(props.comments.length);

  // console.log(props.createdAt);
  //-- 시간 --
  const createdAt = props.createdAt;
  const date = returnGapDate(new Date(), createdAt);
  console.log(date);

  //글자수 제한
  const contentRef = useRef(null);
  const moreClick = (e) => {
    contentRef.current.classList.add("show");
    e.currentTarget.classList.add("hide");
  };

  return (
    <Grid
      border="1px solid #dedede"
      radius="3px"
      margin="20px 0"
      background="#fff"
    >
      {/* 1번 */}
      <UserBox width="100%">
        <Userinfo>
          <Image shape="circle" src={props.src} />
          <Text bold padding="0 0 0 10px" fontWeight="bold">
            {props.nickname}
          </Text>
        </Userinfo>

        <More>
          {props.nickname === localData ? (
            <PostModal is_me={true} post_id={props._id} />
          ) : (
            <PostModal is_me={false} post_id={props._id} />
          )}
        </More>
      </UserBox>
      {/* 2번  */}
      <Grid>
        {fileType.includes("image/") ? (
          <Image
            shape="rectangle"
            src={props.upload[0].path}
            size="100%"
            width="100%"
          />
        ) : (
          <video
            width="100%"
            controls
            autautoplay="autoplay"
            src={props.upload[0].path}
            type="video/*"
            muted
          ></video>
        )}
      </Grid>
      {/* <DetailImg backgroundImg={props.upload[0].path} /> */}

      {/* 3번 */}
      <Grid padding="10px 16px">
        <Icon
          src={icon05}
          alt="headerIcon_05"
          // onClick={postLike}
        />
        <Icon
          src={icon06}
          alt="icon06"
          onClick={() => {
            history.push(`/main/Detail/${props.Id}`);
          }}
        />
        <Icon src={icon02} alt="headerIcon_02" />
      </Grid>
      {/* 4번  - 아이콘 */}
      <Grid padding="8px 16px">
        <Text fontWeight="bold"> 좋아요 {props.likes}개</Text>
      </Grid>
      {/* 5번 */}
      <Grid padding="0 16px" flex alignItems="center">
        <Ellipsis ref={contentRef}>
          <Text fontWeight="bold" float="left" padding="0 5px 0 0">
            {props.nickname}
          </Text>
          {props.content}
        </Ellipsis>

        <EButton onClick={moreClick}>더보기</EButton>
      </Grid>
      {/* 6번 */}
      <Grid padding=" 8px 16px">
        <Text color="#8e8e8e" fontWeight="600">
          {props.comments.length > 0
            ? `댓글 ${props.comments.length}개 모두보기`
            : ""}
        </Text>
      </Grid>
      {/* 7번 */}
      <Grid padding="5px 16px 16px 16px">
        <Text color="#8e8e8e" size="10px">
          {date} 전
        </Text>
      </Grid>
      {/* 8번 - 댓글 작성*/}
      <CommentBox>
        <img src={icon07} alt="이모지" style={{ padding: "8px 16px 8px 0" }} />
        <Grid flex justify="space-between">
          <Button
            type="text"
            width="20%"
            size="24"
            border="none"
            background="none"
            text="댓글달기..."
            color="#8e8e8e"
            _onClick={() => {
              history.push(`/main/Detail/${props._id}`);
            }}
          />
          <Button
            text="게시"
            background="none"
            border="none"
            color="#cde6fd"
          ></Button>
        </Grid>
      </CommentBox>
    </Grid>
  );
};

//---- 1 ----
const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
`;
const Userinfo = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
`;
const More = styled.div`
  padding-right: 16px;
`;
const CommentBox = styled.div`
  padding: 0 16px;
  display: flex;
  flex: 1, 1, 0;
  border-top: 1px solid #efefef;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

Post.defaultProps = {
  // posts: {
  //   id: 0,
  //   content: "dkfjdkfjkdjf",
  //   uploadUrl: "",
  //   type: "",
  //   createAt: "",
  //   user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  //   user_name: "mean0",
  // },
  // image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  // contents: "고양이네요!",
  // comment_cnt: 10,
  // insert_dt: "2021-02-27 10:00:00",
  // is_me: false,
};
const Ellipsis = styled.div`
  position: relative;
  display: -webkit-box;
  max-height: 6rem;
  line-height: 2rem;
  width: 280px;
  /* display: -webkit-box;  */
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  float: left;
  /* -webkit-line-clamp: 3; */
  &.show {
    display: block;
    max-height: none;
    width: 93%;
    line-height: 1.8;
    /* overflow: auto; */
    -webkit-line-clamp: unset;
  }
`;
const EButton = styled.button`
  max-height: 2rem;
  /* line-height: 2rem; */
  padding-left: 20px;
  background: none;
  border: none;
  color: #8f8f8f;
  font-size: 14px;
  &.hide {
    display: none;
  }
`;

export default Post;
