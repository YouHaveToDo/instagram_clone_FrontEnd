import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";
import { actionCreators as postActions } from "../redux/module/post";
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
    dispatch();
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
        <Grid padding="30px 15px">
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
        <Grid></Grid>
        <Grid></Grid>
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

export default DetailCont;
