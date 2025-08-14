import { Link } from "react-router-dom";
import { styled } from "styled-components";
import type { Item as ItemType } from "../types.ts";
import { Poster } from "./poster.tsx";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 12px;

  &:first-child {
    margin-top: 12px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 4px;
`;

const Title = styled.div`
  font-weight: 500;
`;

const Description = styled.div`
  font-size: 0.9rem;
`;

const Secondary = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
`;

export function Item({
  name,
  description,
  releaseDate,
  posterPath,
  status,
  action,
  link,
}: ItemType) {
  return (
    <Wrapper>
      {link
        ? (
          <Link to={link}>
            <Poster posterPath={posterPath} width="64px" height="96px" />
          </Link>
        )
        : <Poster posterPath={posterPath} width="64px" height="96px" />}
      <Info>
        <Title>{name}</Title>
        {description ? <Description>{description}</Description> : null}
        <Secondary>{releaseDate ? releaseDate : status}</Secondary>
      </Info>
      {action}
    </Wrapper>
  );
}
