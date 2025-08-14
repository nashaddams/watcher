import { useState } from "react";
import { styled } from "styled-components";

type Props = {
  posterPath?: string;
  width: string;
  height: string;
};

const Img = styled.img<{ width: string }>`
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  border-radius: 6px;
  object-fit: cover;
  object-position: center;
`;

export const Poster = ({ posterPath, width, height }: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const hide: React.CSSProperties = { display: "none" };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        style={(!posterPath || !loaded) ? {} : hide}
      >
        <rect
          width={width}
          height={height}
          fill="#FFFFFF"
          fill-opacity="0.1"
          rx="5"
          ry="5"
        />
      </svg>
      {posterPath
        ? (
          <Img
            src={`https://image.tmdb.org/t/p/w200${posterPath}`}
            width={width}
            style={!loaded ? hide : {}}
            onLoad={() => setLoaded(true)}
          />
        )
        : null}
    </>
  );
};
