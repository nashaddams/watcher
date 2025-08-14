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
