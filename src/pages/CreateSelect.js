import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/Index";
import file from "../images/icons/icon_file.png";
import Upload from '../shared/Upload';

const CreateSelect = () => {
  return (
    <div>
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
          width="641px"
          height="750px"
          margin="100px auto 0 auto"
          background="#fff"
          radius="10px"
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
          </Grid>
          <Grid>
            <Icon src={file} alt="file" />
            <Text align="center" size="22px">
              사진과 동영상을 여기에 끌어다 놓으세요
            </Text>
            <Upload/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
const Icon = styled.img`
  width: 120px;
  /* height: 96px; */
  margin: 200px auto 0 auto;
  display: flex;
`;


export default CreateSelect;
