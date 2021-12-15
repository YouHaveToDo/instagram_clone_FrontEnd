import React from "react";
import styled from "styled-components";

const Input = React.forwardRef(
  (
    {
      borderB,
      placeholder,
      height,
      value,
      _onClick,
      _onChange,
      children,
      width,
      margin,
      padding,
      radius,
      background,
    },
    ref
  ) => {
    return (
      <ElInput
        borderB={borderB}
        placeholder={placeholder}
        height={height}
        ref={ref}
        onClick={_onClick}
        onChange={_onChange}
        value={value}
        width={width}
        margin={margin}
        padding={padding}
        radius={radius}
        background={background}
      >
        {children}
      </ElInput>
    );
  }
);

Input.defaultProps = {
  margin: "0px",
  border: "none",
  outline: "none",
  // value: null,
  children: null,
  _onClick: () => {},
  _onChange: () => {},
  padding: "0px",
};
const ElInput = styled.input`
  border: none;
  resize: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.outline ? `outline: ${props.outline};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) =>
    props.background ? `background-color: ${props.background};` : ""} /*  */
`;

export default Input;
