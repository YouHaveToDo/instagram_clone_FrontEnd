import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Grid, Text, Image } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/module/image";
import { history } from "../redux/configureStore";

const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const [fileVideos, setFileVideo] = React.useState("");

  //fileVideos 값이 있을때 실행하기
  React.useEffect(() => {
    if (!fileVideos) {
      return;
    }
    dispatch(imageActions.setPreviewVideo(fileVideos));
  }, [fileVideos]);

  //파일 선택
  const selectFile = (e) => {
    //선택된 파일
    const file = fileInput.current.files[0];

    //파일타입
    const fileType = file.type;


    //FileReader 객체 생성
    const reader = new FileReader();
    reader.readAsDataURL(file);

    //createObjectURL 비디오 url
    const videourl = URL.createObjectURL(file);
    setFileVideo(videourl);

    if (fileType.includes("video/")) {
      console.log(typeof videourl);
    }

    //파일 로드 완료시
    reader.onloadend = (e) => {
      const preview = reader.result;

      //리덕스 저장
      dispatch(imageActions.setPreview(fileType, preview, file));
      history.push(`/main/create/details`);
    };
  };
  return (
    <div>
      <Grid justify="center" flex margin="24px 0">
        <Label for="file">컴퓨터에서 선택</Label>

        <File
          type="file"
          id="file"
          accept="video/* ,image/*"
          onChange={selectFile}
          ref={fileInput}
          // disabled={is_uploading}
        ></File>
      </Grid>
    </div>
  );
};
const Label = styled.label`
  /* width: 100px; */
  padding: 5px 9px;
  margin: 0 auto;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #0095f6;
  color: #fff;
`;
const File = styled.input`
  position: absolute;
  width: 0px;
  height: 0px;
  overflow: hidden;
  z-index: 1;
`;
export default Upload;
