import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 8rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.6px);
  -webkit-backdrop-filter: blur(1.6px);
  border: 1px solid rgba(255, 255, 255, 0.27);
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const Liquid = styled.div.attrs((props) => ({
  style: {
    transform: `translateY(${100 - props.$capacity}%)`,
  },
}))`
  background: linear-gradient(45deg, #1bd6ff, #3b9dff);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 8rem;
  width: 100%;
  z-index: 1;
`;

const JugName = styled.span`
  font-size: 3rem;
  color: #2b2e36;
  z-index: 3;
`;

export default function Jug({ capacity }) {
  return (
    <Container>
      <JugName>{capacity}l</JugName>
      <Liquid $capacity={capacity}></Liquid>
    </Container>
  );
}
