import { styled } from "styled-components";
import { Color } from "../global.tsx";

export const Main = styled.main`
  padding: 24px;
`;

export const H1 = styled.h1`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 300;
  margin: 0 0 24px 0;
`;

export const H2 = styled.h2`
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 300;
  margin: 0 0 16px 0;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 6px 10px;
  color: white;
  background-color: ${Color.BgSecondary};
  font-size: 1rem;
`;

export const Button = styled.button.attrs({ type: "button" })<
  { primary?: boolean }
>`
  background: ${(props) => props.primary ? Color.Accent : Color.Bg};
  color: ${(props) => props.primary ? "black" : "white"};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 10px 0 0;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  outline: 0;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
