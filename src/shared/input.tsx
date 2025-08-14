import { styled } from "styled-components";
import { Color } from "../global.tsx";

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
