import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";

const DetailImage = (props) => {
  return (
    <Grid width="60%">
      <Grid>
        <DetailImg backgroundImg={props.backgroundImg}></DetailImg>
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
