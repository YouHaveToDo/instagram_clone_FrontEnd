import React from "react";

import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, paddingLeft } = props;

  const styles = {
    src: src,
    size: size,
    paddingLeft: paddingLeft,
  };

  //프로필 이미지
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  //게시물 이미지
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <AspectOutter>
      <AspectInner onClick={props._onClick}></AspectInner>
    </AspectOutter>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "http://www.goingmary.co.kr/shop/data/images/icons/basic_user.png",

  _onClick: () => {},
  width: false,
  size: 36,
  paddingLeft: false,
};

const AspectOutter = styled.div`
  width: 100%;
`;
const AspectInner = styled.img`
  position: relative;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  /* src: "http://3.36.74.204/${(props) => props.src}" */
  background-size: contain;
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  height: var(--size);
  /* background-size: cover; */
  padding-top: 75%; // 이미지가 가로넓이의 4:3비율을 맞추기위해 75% 적용
  overflow: hidden;
  background-repeat: no-repeat;
  background-color: red;
  background-position: center;
`;
//프로필 이미지
const ImageCircle = styled.img`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
`;

export default Image;
