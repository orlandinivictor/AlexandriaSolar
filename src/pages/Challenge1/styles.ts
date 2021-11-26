import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  position: relative;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 180px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 20px 40px 30px;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 8px;

  h2 {
    font-size: 18px;
  }

  span {
    font-size: 24px;
    margin-top: 20px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 44%;
  outline: 0;
  border: 0;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);

  width: 36px;
  height: 36px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    filter: brightness(0.7);
    color: #0e2138;
  }
`;

export const PageButton = styled.button`
  outline: 0;
  border: 0;

  margin-top: 30px;
  margin-inline: 5px;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);

  width: 36px;
  height: 36px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #eee;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    filter: brightness(0.7);
    color: #0e2138;
  }
`;

export const Icon = styled.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 36px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: "liga";

  color: #eee;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    filter: brightness(0.7);
    color: #0e2138;
  }
`;

export const Title = styled.h1`
  color: #eee;
  margin-bottom: 10px;
`;
