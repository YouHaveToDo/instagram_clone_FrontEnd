import React from "react";
import styled from "styled-components";

const Input = React.forwardRef(
  (
    { borderB, placeholder, height, value, _onClick, _onChange, children },
    ref
  ) => {
    return (
      <ElTextarea
        borderB={borderB}
        placeholder={placeholder}
        height={height}
        ref={ref}
        onClick={_onClick}
        onChange={_onChange}
        value={value}
      >
        {children}
      </ElTextarea>
    );
  }
);

Input.defaultProps = {
  border: "none",
  outline: "none",
  value: null,
  children: null,
  _onClick: () => {},
  _onChange: () => {},
};
const ElTextarea = styled.textarea`
  border: none;
  width: 100%;
  resize: none;
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.outline ? `outline: ${props.outline};` : "")}
`;

export default Input;
