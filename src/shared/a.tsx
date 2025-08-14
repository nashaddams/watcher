import { styled } from "styled-components";
import { Link as BaseLink } from "react-router-dom";
import { Color } from "../global.tsx";

export const A = styled.a`
  display: inline-block;
  color: ${Color.Accent};
  font-style: normal;
  text-decoration: none;
  cursor: pointer;
`;

export const Link = styled(BaseLink)`
  display: inline-block;
  color: ${Color.Accent};
  font-style: normal;
  text-decoration: none;
  cursor: pointer;
`;
