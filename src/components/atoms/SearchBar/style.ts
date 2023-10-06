import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  svg {
    font-size: 10px;
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    padding: 2px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  border: 1px solid var(--color-purple-light);
  border-radius: 12px;
  padding: 9px 25px 6px 12px;
  font-size: 8px;

  :focus {
    border: 1px solid var(--color-purple-dark) !important;
  }
`;
