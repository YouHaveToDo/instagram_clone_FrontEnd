import React from "react";
import styled from "styled-components";

const Button = (props) => {
  // const { text, _onClick, borderBottom } = props;
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
      radius={props.radius}
      line={props.line}
      display={props.display}
      items={props.items}
      justify={props.justify}
      borderBottom={props.borderBottom}
      size={props.size}
      top={props.top}
      left={props.left}
    >
      {props.children}
      {props.text}
    </ElButton>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  width: null,
  height: null,
  text: "텍스트",
  boderBottom: null,
  children: null,
  bold: false,
  align: false,
  // position: null,
};

const ElButton = styled.button`
  cursor: pointer;
  ${(props) => (props.width ? `width: ${props.width};` : "null")}/
  ${(props) => (props.bold ? `font-weight: bold;` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.background ? `background: ${props.background};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "null")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "static")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.line ? `line-height: ${props.line};` : "")}
  ${(props) => (props.display ? `display: ${props.display};` : "")}
  ${(props) => (props.items ? `align-items: ${props.items};` : "")}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""} /*  */
  ${(props) => (props.size ? `font-size: ${props.size};` : "")}
  ${(props) => (props.top ? `top: ${props.top};` : "")};
  ${(props) => (props.right ? `right: ${props.right};` : "")};
`;

export default Button;
