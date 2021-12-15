import React from "react";
import styled from "styled-components";
// import { useState } from "react";
import { Grid, Text, Image, TextArea } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as postAction } from "../redux/module/post";

const CreateDetails = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const formData = useSelector((state) => state.image.formData);
  // console.log(formData);

  const [contents, setContents] = React.useState();
  //---- 게시글 추가 ----
  const addPost = () => {
    console.log(contents, formData);
    dispatch(postAction.addPostDB(contents, formData));
    // console.log(setContents);
  };
  return (
    <>
      {/* 배경 */}
      <Grid
        width="100%"
        height="100vh"
        margin="0 auto"
        background="rgba(0, 0, 0, 0.3)"
        position="absolute"
        top="0"
        left="0"
        zIndex="11"
      >
        {/* 박스(흰색)  */}
        <Grid
          width="1035px"
          height="579px"
          margin="100px auto 0 auto"
          background="#fff"
          radius="10px"
          position="relative"
          // direction="column"
        >
          {/* 제목 */}
          <Grid borderB="1px solid #dbdbdb">
            <Text
              padding="20px 0"
              align="center"
              background="red"
              size="16px"
              weight="bold"
            >
              새 게시물 만들기
            </Text>
            <Button onClick={addPost}>공유하기</Button>
          </Grid>
          <Grid flex>
            {/* 왼쪽 이미지 */}
            <Grid width="695px" height="695px">
              <Image
                shape="rectangle"
                src={preview ? preview : "http://via.placeholder.com/400x300"}
              />
            </Grid>

            {/* 오른쪽 텍스트 */}
            <Grid width="340px" height="695px">
              <Grid flex alignItems="center " padding="25px 16px">
                <Image
                  shape="circle"
                  src="http://www.goingmary.co.kr/shop/data/images/icons/basic_user.png"
                />
                <Text bold padding="0 0 0 10px" fontWeight="bold">
                  닉네임
                </Text>
              </Grid>
              <TextArea
                padding="0 16px"
                width="340px"
                height="240px"
                border="none"
                placeholder="문구입력..."
                outline="none"
                _onChange={(e) => {
                  setContents(e.target.value);
                }}
              >
                문구입력...
              </TextArea>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
CreateDetails.defaultProps = {
  posts: {
    id: 0,
    content: "dkfjdkfjkdjf",
    uploadUrl: "",
    type: "",
    createAt: "",
    updatedAt: "",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    user_name: "mean0",
  },
};
const Button = styled.button`
  size: 14px;
  color: #0095f6;
  font-weight: bold;
  width: 10;
  position: absolute;
  top: 20px;
  right: 16px;
  border: none;
  width: auto;
  background: none;
`;

export default CreateDetails;