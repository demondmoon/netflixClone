import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  // 箭头前是Inner接收到的props，箭头后传递给flex-direction的props
  // 这里是一个函数，因此最后return一个函数值，就当作了flex-direction的值
  // 这里就是：传递了props，destructuring，最后return
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: black;

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {  
      // 这里是一个复杂选择器，首先选了Item所代表的div
      // 之后是:last-of-type伪类，最后是h2
       //last-of-type会选同类最后一个
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%fit-content;
  height: auto;
`;
