import React from "react";

import styled from "styled-components";

const Image = (props) => {
  //---- 게시글 이미지 hover ----

  return (
    <AspectOutter>
      <AspectInner onClick={props._onClick}></AspectInner>
    </AspectOutter>
  );
};

Image.defaultProps = {
  src: "https://instagram.fhyd1-3.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734[…]95&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4",
  _onClick: () => {},
  width: false,
};

const AspectOutter = styled.div`
  width: 100%;
`;
const AspectInner = styled.div`
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  ${(props) => (props.width ? `width: ${props.width};` : "")}
`;

export default Image;
