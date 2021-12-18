import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/Index";
import { useDispatch, useSelector } from "react-redux";

const DetailImage = (props) => {
  const posts_info = useSelector((state) => {
    console.log(state);
    return state.post.post;
  });
  console.log(posts_info);
  // console.log(posts_info.result.upload[0].path);
  // const fileType = posts_info.result.upload[0].mimetype;

  return (
    <Grid width="60%">
      <Grid>
        {/* {fileType.includes("image/") ? (
          <Image
            shape="rectangle"
            src={posts_info.result.upload[0].path}
            size="100%"
            width="100%"
          />
        ) : (
          <video
            width="100%"
            controls
            autautoplay="autoplay"
            src={posts_info.result.upload[0].path}
            type="video/*"
            muted
          ></video>
        )} */}
      </Grid>
    </Grid>
  );
};

const DetailImg = styled.div`
  height: 767px;
  ${(props) =>
    props.backgroundImg ? `background-image: url(${props.backgroundImg});` : ""}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default DetailImage;
