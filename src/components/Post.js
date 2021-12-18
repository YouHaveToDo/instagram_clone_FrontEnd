import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../elements/Index";
import { useRef } from "react";
import PostModal from "./PostModal";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/module/post";
import { commentActions } from "../redux/module/comment";

//-- icon --
import icon02 from "../images/icons/icon_02.png";
import icon05 from "../images/icons/icon_05.png";
import icon06 from "../images/icons/icon_06.png";
import icon07 from "../images/icons/icon_07.png";
import icon08 from "../images/icons/icon_08.png";

//date
import { returnGapDate } from "../shared/date";

const Post = (props) => {
  const dispatch = useDispatch();
  const like_state = useSelector((state) => state.post.like);
  const [like, setLike] = React.useState(like_state); // 좋아요
  const like_list = useSelector((state) => state.post.likes);

  const plz = async () => {
    await dispatch(commentActions.getCommentDB(props.post_id));
    await dispatch(postActions.detailGetPostDB(props.post_id));
    history.push(`/main/Detail/${props.post_id}`);
  };
  const localData = localStorage.getItem("MY_LOCAL");

  const fileType = props.upload[0].mimetype;

  //-- 시간 --
  const createdAt = props.createdAt;
  const date = returnGapDate(new Date(), createdAt);

  //글자수 제한
  const contentRef = useRef(null);
  const moreClick = (e) => {
    contentRef.current.classList.add("show");
    e.currentTarget.classList.add("hide");
  };

  //좋아요
  const toggleLike = () => {
    dispatch(postActions.likePostDB(props._id));
    setLike(!like);
    dispatch(postActions.like(like));
  };
  React.useEffect(() => {
    if (like_list[props.idx] === true) {
      setLike(true);
    }
  }, []);

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
            // size="100%"
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

      {/* 3번 */}
      <Grid padding="10px 16px">
        <Icon
          src={!like ? icon08 : icon05}
          alt="headerIcon_05"
          like={like}
          onClick={toggleLike}
        />
        <Icon src={icon06} alt="icon06" onClick={plz} />
        <Icon src={icon02} alt="headerIcon_02" />
      </Grid>
      {/* 4번   */}
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
        <Button
          color="#8e8e8e"
          fontWeight="600"
          cursor="pointer"
          _onClick={plz}
          border="none"
          background="none"
        >
          {props.comments.length > 0
            ? `댓글 ${props.comments.length}개 모두보기`
            : ""}
        </Button>
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
            _onClick={plz}
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
  cursor: pointer;
`;

Post.defaultProps = {};
const Ellipsis = styled.div`
  position: relative;
  display: -webkit-box;
  max-height: 6rem;
  line-height: 2rem;
  width: 220px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  float: left;
  &.show {
    display: block;
    max-height: none;
    width: 93%;
    line-height: 1.8;
    -webkit-line-clamp: unset;
  }
`;
const EButton = styled.button`
  max-height: 2rem;
  padding-left: 20px;
  background: none;
  border: none;
  color: #8f8f8f;
  font-size: 14px;
  cursor: pointer;
  &.hide {
    display: none;
  }
`;
export default Post;
