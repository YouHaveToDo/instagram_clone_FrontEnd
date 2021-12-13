import React from "react";
import styled from "styled-components";

const Textarea = (props) => {
  return (
    <ElTextarea
      border={props.border}
      background={props.background}
      width={props.width}
      padding={props.padding}
      weight={props.weight}
      color={props.color}
      size={props.size}
      onClick={props._onClick}
      onChange={props._onChange}
    />
  );
};

Textarea.defaultProps = {
  border: false,
  background: false,
  width: false,
  padding: false,
  weight: false,
  color: false,
  size: false,
  _onClick: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  ${(props) => (props.background ? `background: ${props.background};` : "")}
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.size ? `font-size: ${props.size};` : "")}
`;

export default Textarea;
