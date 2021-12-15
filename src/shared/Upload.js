import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Grid, Text, Image } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/module/image";
import { history } from "../redux/configureStore";

const Upload = (props) => {
  const [file, setFile] = useState(null);
  const fileInput = React.useRef();
  const dispatch = useDispatch();

  const selectFile = (e) => {
    const file = fileInput.current.files[0];

    const formData = new FormData();
    formData.append("file", file);


    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // console.log(reader.result);
      history.push(`/main/create/details`);
      //프리뷰 리덕스 저장
      dispatch(imageActions.setPreview(reader.result, formData));
    };
  };
  return (
    <div>
      <Grid justify="center" flex margin="24px 0">
        <Label for="file">컴퓨터에서 선택</Label>
        <File
          type="file"
          id="file"
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
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: 1;
`;
export default Upload;
