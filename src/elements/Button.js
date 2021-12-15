import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, borderBottom } = props;
  return (
    <ElButton
      onClick={props._onClick}
      width={props.width}
      position={props.position}
      margin={props.margin}
      height={props.height}
      padding={props.paddjng}
      border={props.border}
      background={props.background}
      color={props.color}
      bold={props.bold}
      text={props.text}
      borderBottom={props.borderBottom}
    >
      {text}
    </ElButton>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  width: null,
  height: null,
  text: "텍스트",
  boderBottom: null,
};

const ElButton = styled.button`
  ${(props) => (props.width ? `width: ${props.width};` : "null")}/
  ${(props) => (props.bold ? `font-weight: bold;` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.background ? `background: ${props.background};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "null")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
`;

export default Button;
