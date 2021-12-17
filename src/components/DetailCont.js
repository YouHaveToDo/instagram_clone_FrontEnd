import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";
import { actionCreators as postActions } from "../redux/module/post";
import icon02 from "../images/icons/icon_02.png";
import icon05 from "../images/icons/icon_05.png";
import icon06 from "../images/icons/icon_06.png";
import icon07 from "../images/icons/icon_07.png";

const DetailCont = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const post_id = params.post_id;

  // delete 버튼 만들어서 onclick으로 넣으면 됨 12/16 *종찬
  const DeletePost = () => {
    dispatch(postActions.deletePostDB(post_id));
  };
  // 게시글 상세 조회

  React.useEffect(() => {
    // dispatch();
  }, []);


  return (
    <Grid width="40%" borderL="1px solid #d9d9d9">
      <Grid flex direction="column">
        <Grid
          height="69px"
          flex
          className="top"
          items="center"
          borderB="1px solid #d9d9d9"
          padding="0 15px"
        >
          <Grid width="15%">
            <Logo></Logo>
          </Grid>
          <Grid flex direction="column" width="75%">
            <Text size="14px" weight="900">
              사용자 이름<Span> • </Span>
              <Span>팔로잉</Span>
            </Text>
            <Text margin="5px 0 0 0">장소</Text>
          </Grid>
          <Grid width="10%">
            <Text size="10px" weight="900">
              •••
            </Text>
          </Grid>
        </Grid>
        <Grid padding="30px 15px" height="560px" borderB="1px solid #d9d9d9">
          <Grid flex>
            <Grid width="15%">
              <Logo></Logo>
            </Grid>
            <Grid flex width="75%" items="center">
              <Grid flex width="auto">
                <Text size="14px" weight="900">
                  사용자 이름
                </Text>
              </Grid>
              <Text margin="0 0 0 5px" width="auto%">
                배고프다 밥먹을까?
              </Text>
            </Grid>
            {/* <Grid width="10%" items="center">
            <Text size="10px" weight="900">
            •••
            </Text>
          </Grid> */}
          </Grid>
          <Grid width="100%" margin="0 0 0 59px">
            <Text>1시간</Text>
          </Grid>
        </Grid>
        <Grid>
          <Grid padding="10px 16px">
            {/* <img src={icon01} alt="headerIcon_01" /> */}
            <Icon src={icon05} alt="headerIcon_05" />
            <Icon src={icon06} alt="icon06" />
            <Icon src={icon02} alt="headerIcon_02" />
          </Grid>
          <Grid padding="10px 16px">
            <Text weight="900">좋아요 373개</Text>
          </Grid>
          <Grid padding="3px 16px">
            <Text size="10px">11시간 전</Text>
          </Grid>
        </Grid>
        <Grid>
          <CommentBox>
            <img
              src={icon07}
              alt="이모지"
              style={{ padding: "8px 16px 8px 0" }}
            />
            <Grid flex justify="space-between">
              <Input
                type="text"
                width="80%"
                size="24"
                border="none"
                background="none"
                placeholder="댓글달기..."
                color="#8e8e8e"
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
      </Grid>
    </Grid>
  );
};

const Logo = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: yellow;
`;
const Span = styled.span`
  color: #000;
  font-weight: 900;
  font-size: 14px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;
const CommentBox = styled.div`
  padding: 0 8px;
  display: flex;
  flex: 1, 1, 0;
  border-top: 1px solid #efefef;
`;
export default DetailCont;
