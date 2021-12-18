import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    flex,
    justify,
    _onClick,
    position,
    height,
    border,
    background,
    ///
    direction,
    items,
    top,
    left,
    transform,
    radius,
    borderB,
    borderT,
    borderL,
    ////
    alignItems,
    maxWidth,
    boxSizing,
    //
    zIndex,
    overflow,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    flex: flex,
    justify: justify,
    position: position,
    height: height,
    border: border,
    background: background,
    alignItems: alignItems,
    maxWidth: maxWidth,
    boxSizing: boxSizing,
    left: left,
    radius: radius,
    direction,
    items,
    top,
    transform,
    borderB,
    borderT,
    borderL,
    zIndex,
    overflow,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  flex: false,
  justify: false,
  wrap: false,
  position: false,
  height: false,
  border: false,
  background: false,
  alignItems: false,
  maxWidth: false,
  boxSizing: false,
  left: false,
  radius: false,
  zIndex: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  ${(props) => (props.background ? `background: ${props.background};` : "")}
  max-width: ${(props) => props.maxWidth};
  ${(props) => (props.left ? `left: ${props.left};` : "")}
  ${(props) => (props.top ? `top: ${props.top};` : "")}
  ${(props) => (props.boxSizing ? `box-sizing: border-box;` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  /* border: 1px solid #888; */
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.wrap ? `flex-wrap: wrap;` : "")}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : "")}
  ${(props) => (props.items ? `align-items: ${props.items};` : "")}
  ${(props) => (props.transform ? `transform: ${props.transform};` : "")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.borderB ? `border-bottom: ${props.borderB};` : "")}
  ${(props) => (props.borderT ? `border-top: ${props.borderT};` : "")}
  ${(props) => (props.borderL ? `border-left: ${props.borderL};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.flex ? `display: flex;` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.flex ? `display: flex; ` : "")}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : "")} 
  
    /*  */
    ${(props) => (props.zIndex ? `z-index: ${props.zIndex};` : "")}
    ${(props) => (props.overflow ? `overflow: scroll;` : "")}
`;

export default Grid;
