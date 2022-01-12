import React from "react";
import { Container, Item, Inner, Title, SubTitle, Image, Pane } from "./styles/jumbotron";
// 这个组件本质上是一个compound component，在containers中的jumbotron.js可以看到如何使用
const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {  // image不需要children
  return <Image {...restProps} />;
};

Jumbotron.Pane = function JumbotronPane({ ...restProps }) {  // image不需要children
  return <Pane {...restProps} />;
};


export default Jumbotron;
