import { styled } from "styled-components";
import { Link as BaseLink } from "react-router-dom";
import { linkCss } from "../global.tsx";
import { Route } from "../routes.ts";

const Link = styled(BaseLink)`
  ${linkCss};
  justify-self: right;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 8px;
  right: 24px;
  display: grid;
  grid-template-rows: auto auto;
  gap: 4px;
  background-color: #d32f2f;
  padding: 11px 12px 12px 12px;
  border-radius: 6px;
`;

export function MissingApiKey(
  { missing, invalid }: { missing: boolean; invalid: boolean },
) {
  if (missing) {
    return (
      <Wrapper>
        <div>Missing TMDB API Key.</div>
        <Link to={Route.Settings.path}>→ Go to settings.</Link>
      </Wrapper>
    );
  }
  if (invalid) {
    return (
      <Wrapper>
        <div>Invalid TMDB API Key.</div>
        <Link to={Route.Settings.path}>→ Go to Settings.</Link>
      </Wrapper>
    );
  }
  return null;
}
