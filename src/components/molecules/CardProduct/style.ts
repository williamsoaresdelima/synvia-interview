import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 152px;

  img {
    width: 90px;
    height: 90px;
    border-radius: 6px;
    object-fit: cover;
    background-color: var(--color-white);
  }
`;

export const HeaderContent = styled.div`
  margin: 4px 0 8px 0;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;

  svg {
    font-size: 10px;
  }

  img {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
`;

export const Category = styled.div`
  margin-top: 8px;
  width: fit-content;
  display: flex;
  padding: 6px 2px;
  background-color: var(--color-purple-medium);
  border-radius: 4px;
`;
