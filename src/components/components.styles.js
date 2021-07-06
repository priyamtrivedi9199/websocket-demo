import styled from "styled-components";
import Button from "@material-ui/core/Button";

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
    background-color: blue;
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
  color: blue;
  border: 2px solid blue;
`;
