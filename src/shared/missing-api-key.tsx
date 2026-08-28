import { styled } from "styled-components";
import { Link as BaseLink } from "react-router-dom";
import { linkCss } from "../global.tsx";

const Link = styled(BaseLink)`
  ${linkCss};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  left: 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
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
        <Link to="/settings">Settings</Link>
      </Wrapper>
    );
  }
  if (invalid) {
    return (
      <Wrapper>
        <div>Invalid TMDB API Key.</div>
        <Link to="/settings">Go to Settings</Link>
      </Wrapper>
    );
  }
  return null;
}
