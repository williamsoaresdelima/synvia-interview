import { styled } from "styled-components";

export const Background = styled.div`
  position: relative;
  height: 50px;
  padding: 6px 0;
  z-index: 10;
  box-shadow: var(--shadow);
  background-color: var(--color-white);
`;

export const ContainerBox = styled.div`
  max-width: 623px;
  margin: 0 auto;
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    width: 26px;
    height: 26px;
    cursor: pointer;

    path {
      fill: var(--color-green-medium);
    }
  }
`;
