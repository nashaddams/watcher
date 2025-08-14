import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { H2 } from "../../shared/elements.tsx";
import { Poster } from "../../shared/poster.tsx";
import type { Item } from "../../types.ts";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: 128px;
  grid-auto-flow: column;
  align-items: start;
  gap: 12px;
  overflow: hidden;
  overflow-x: auto;
`;

const Item = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 12px 12px 0 12px;
`;

const Description = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 12px 0 12px;
`;

type Props = {
  title?: string;
  items?: {
    id?: number;
    posterPath?: string;
    title?: string;
    description?: string;
    link?: string;
  }[];
};

export const Gallery = ({ title, items }: Props) => {
  if (items?.length) {
    return (
      <>
        {title ? <H2>{title}</H2> : null}
        <Wrapper>
          {items.map((i) => (
            <Item>
              {i.link
                ? (
                  <Link to={i.link}>
                    <Poster
                      posterPath={i.posterPath}
                      width="128px"
                      height="192px"
                    />
                  </Link>
                )
                : (
                  <Poster
                    posterPath={i.posterPath}
                    width="128px"
                    height="192px"
                  />
                )}
              {i.title ? <Title title={i.title}>{i.title}</Title> : null}
              {i.description
                ? (
                  <Description title={i.description}>
                    {i.description}
                  </Description>
                )
                : null}
            </Item>
          ))}
        </Wrapper>
      </>
    );
  }
  return null;
};
