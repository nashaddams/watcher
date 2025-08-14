import { HTMLAttributes } from "react";
import { styled } from "styled-components";
import { Color } from "../global.tsx";
import { Input } from "../shared/elements.tsx";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  margin-top: 16px;
`;

const Button = styled.div`
  border-radius: 6px;
  padding: 6px;
  background-color: ${Color.BgSecondary};
  border: none;
  cursor: pointer;
`;

const Svg = styled.svg`
  height: 20px;
  width: auto;
  margin: 4px 4px 0 5px;
`;

export const Form = {
  Wrapper,
  Input,
  SaveButton: (props: HTMLAttributes<HTMLDivElement>) => (
    <Button {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M18 19H19V6.82843L17.1716 5H16V9H7V5H5V19H6V12H18V19ZM4 3H18L20.7071 5.70711C20.8946 5.89464 21 6.149 21 6.41421V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM8 14V19H16V14H8Z">
        </path>
      </Svg>
    </Button>
  ),
};
