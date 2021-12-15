import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    weight,
    color,
    size,
    children,
    margin,
    opacity,
    padding,
    border,
    lineH,
    align,
    fontWeight,
    float,
  } = props;
  const styles = {
    weight,
    color,
    size,
    margin,
    opacity,
    padding,
    border,
    lineH,
    align,
    fontWeight,
    float,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  weight: false,
  opacity: "100%",
  padding: false,
  lineH: false,
  _onClick: () => {},
  align: false,
  fontWeight: false,
  float: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => (props.lineH ? `line-height: ${props.lineH};` : "")};
  ${(props) => (props.border ? `border-bottom: ${props.border};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.opacity ? `opacity: ${props.opacity};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : "")};
  ${(props) => (props.align ? `text-align: ${props.align};` : "")};
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")};
  ${(props) => (props.float ? `float: ${props.float};` : "")};
`;

export default Text;
