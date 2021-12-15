import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";
import DetailImage from "../components/DetailImage";
import DetailCont from "../components/DetailCont";
import DImg from "../images/DImg.png";

const Detail = () => {
  return (
    <Grid
      width="100%"
      height="100vh"
      margin="0 auto"
      background="rgba(0, 0, 0, 0.8)"
      position="absolute"
      top="0"
      left="0"
      zIndex="11"
    >
      <Grid
        className={"modalcont"}
        width="1060px"
        height="80vh"
        margin="100px auto 0 auto"
        background="#fff"
        radius="10px"
        flex
      >
        <DetailImage backgroundImg={DImg}></DetailImage>
        <DetailCont></DetailCont>
      </Grid>
    </Grid>
  );
};

export default Detail;
