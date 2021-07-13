import styled from "styled-components";

export const StyledButton = styled.button`
  &:hover {
    padding-right: 50px;
    &:before {
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0px;
    }
    &:before {
      left: 17px;
      transform: rotate(30deg);
    }

    &:after {
      transform: translate(-33px) rotate(45deg);
    }
    background-color: green;
    color: white;
    border: 2px solid white;
    /* transform: scale(1.2) */
    transform: rotatex(20deg) rotateY(20deg);
  }
  transition: all 0.4s;
  transition-timing-function: cubic-bezier(0.5, 3, 0, 1);
  border-radius: 1px;
  background-color: white;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 8rem;
  color: black;
  border: 2px solid green;
`;
export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  padding: 10px;
  background-color: #1b262d;
  margin: 5px;
`;
export const BitCoinIcon = styled.div`
  font-size: 48px;
  width: 60px;
`;
export const Side = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0px 20px;
  h4 {
    font: Bold 16px Arial;
    text-align: center;
    padding: 0px;
    margin: 0px;
  }
`;
export const Line = styled.div`
  color: #aaa;
  font: 16px Arial;
  text-align: center;
  font: normal 14px Arial;
  span.red {
    color: red;
  }
  span.green {
    color: green;
  }
`;
export const Wrapper = styled.div`
  height:600px;
  background-color: #1b262d;
`;

export const StyledHeader = styled.h4`
color: green;
`