import styled from "styled-components";

export const LoadingArea = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 5;
`;

export const Loading = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid transparent;
  border-top: 4px solid var(--color-purple-dark);
  border-radius: 50%;
  animation: spin 1s infinite;
  -webkit-animation: spin 1s infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
