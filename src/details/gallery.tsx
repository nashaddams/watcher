import { styled } from "styled-components";
import { H2 } from "../shared/h2.tsx";
import { Poster } from "../shared/poster.tsx";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
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
  title: string;
  items?: {
    posterPath?: string;
    title: string;
    description: string;
  }[];
};

export const Gallery = ({ title, items }: Props) => {
  if (items?.length) {
    return (
      <>
        <H2>{title}</H2>
        <Wrapper>
          {items.map((i) => (
            <Item>
              <Poster posterPath={i.posterPath} width="128px" height="192px" />
              <Title>{i.title}</Title>
              <Description>{i.description}</Description>
            </Item>
          ))}
        </Wrapper>
      </>
    );
  }
  return null;
};
