import React from "react";
import styled from "styled-components";

const Button = (props) => {
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
      radius={props.radius}
      line={props.line}
      display={props.display}
      items={props.items}
      justify={props.justify}
    >
      {props.children}
      {props.text}
    </ElButton>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  width: false,
  children: null,
};

const ElButton = styled.button`
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.bold ? `font-weight: bold;` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.background ? `background: ${props.background};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.line ? `line-height: ${props.line};` : "")}
  ${(props) => (props.display ? `display: ${props.display};` : "")}
  ${(props) => (props.items ? `align-items: ${props.items};` : "")}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
`;

export default Button;
