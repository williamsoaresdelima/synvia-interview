import styled from "styled-components";

interface IContainer {
  $active: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  position: relative;
  width: 21px;
  height: 14px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.$active ? "var(--color-green-medium)" : "var(--color-gray-light)"};
  cursor: pointer;
  transition: 0.3s ease;

  &::before {
    position: absolute;
    content: "";
    width: 7px;
    height: 7px;
    background-color: var(--color-white);
    top: 3px;
    right: ${(props) => (props.$active ? "3px" : "11px")};
    border-radius: 50%;
    transition: 0.3s ease;
  }
`;
