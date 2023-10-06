import styled from "styled-components";

interface IActive {
  $active: number;
}

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Button = styled.div<IActive>`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  background-color: var(--color-white);
  border: 1px solid var(--color-purple-light);
  border-radius: 12px;
  gap: 4px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  svg {
    align-self: ${(props) => (props.$active ? "end" : "baseline")};
    font-size: 8px;
  }
`;

export const Dropdown = styled.div<IActive>`
  display: ${(props) => (props.$active ? "flex" : "none")};
  position: absolute;
  width: calc(100% - 2px);
  flex-direction: column;
  background-color: var(--color-white);
  border: 1px solid var(--color-purple-light);
  border-radius: 12px;
  padding-top: 32px;

  div:last-child {
    border-radius: 0 0 12px 12px;
  }
`;

export const DropdownItem = styled.div<IActive>`
  display: flex;
  padding: 10px;
  background-color: ${(props) =>
    props.$active ? "var(--color-purple-medium)" : "var(--color-white)"};
  color: ${(props) =>
    props.$active
      ? "var(--color-white)"
      : "var(--color-purple-medium)"} !important;
  cursor: pointer;
`;
