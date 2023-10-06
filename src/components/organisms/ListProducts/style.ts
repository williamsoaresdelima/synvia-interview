import styled from "styled-components";

export const ContainerBox = styled.div`
  width: 100%;
  height: 67vh;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid var(--color-purple-dark);
  }
`;

export const Container = styled.div`
  padding-left: 28px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 90px);
  grid-template-rows: auto;
  row-gap: 48px;
  column-gap: 32px;
`;
