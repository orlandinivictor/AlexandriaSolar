import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  padding: 20px;
  margin: 20px;

  background: rgba(250, 176, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(150px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
