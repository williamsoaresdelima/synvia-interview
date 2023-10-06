import styled from "styled-components";

interface ICard {
  $active: number;
}

export const Card = styled.div<ICard>`
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$active ? "var(--color-purple-medium)" : "var(--color-white)"};
  border: 1px solid var(--color-purple-light);
  border-radius: 12px;
  cursor: pointer;
  text-transform: capitalize;

  span {
    color: ${(props) =>
      props.$active ? "var(--color-white)" : "var(--color-purple-medium)"};
  }
`;
