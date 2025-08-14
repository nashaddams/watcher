import { useState } from "react";
import { styled } from "styled-components";

type Props = {
  posterPath?: string;
  width: string;
  height: string;
};

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`;

const Img = styled.img<{ width: string; loaded: boolean }>`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  border-radius: 6px;
  object-fit: cover;
  object-position: center;
  opacity: ${({ loaded }) => loaded ? 1 : 0};
  transition: opacity 0.3s;
`;

export const Poster = ({ posterPath, width, height }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Wrapper width={width} height={height}>
      {posterPath
        ? (
          <Img
            src={posterPath}
            width={width}
            loaded={!loading && loaded}
            onLoad={() => {
              setLoading(false);
              setLoaded(true);
            }}
            onError={() => {
              setLoading(false);
              setLoaded(false);
            }}
          />
        )
        : null}
    </Wrapper>
  );
};
