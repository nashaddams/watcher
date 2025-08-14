import type { SVGProps } from "react";
import { styled } from "styled-components";
import type { Item as ItemType } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { H1 } from "../shared/h1.tsx";
import { Item } from "../shared/item.tsx";
import { Search } from "./search.tsx";

const Svg = styled.svg`
  height: 20px;
  width: 20px;
  margin-right: 12px;
  cursor: pointer;
`;

const Icon = {
  Remove: (props: SVGProps<SVGSVGElement>) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(255,255,255,1)"
      {...props}
    >
      <path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z">
      </path>
    </Svg>
  ),
};

type Props = {
  apiKey: string;
  shows: ItemType[];
  movies: ItemType[];
  addShow: (id: number) => void;
  addMovie: (id: number) => void;
  removeShow: (id: number) => void;
  removeMovie: (id: number) => void;
};

export function Library(
  { apiKey, shows, movies, addShow, addMovie, removeShow, removeMovie }: Props,
) {
  return (
    <>
      <H1>Library</H1>
      <Search apiKey={apiKey} addShow={addShow} addMovie={addMovie} />
      {shows
        .sort((s1, s2) => s1.name.localeCompare(s2.name))
        .map((s) => (
          <Item
            type={s.type}
            id={s.id}
            name={s.name}
            releaseDate={s.releaseDate
              ? dayjs(s.releaseDate).format("YYYY")
              : ""}
            posterPath={s.posterPath}
            status={s.status}
            action={<Icon.Remove onClick={() => removeShow(s.id)} />}
            link
          />
        ))}
      {movies
        .sort((m1, m2) => m1.name.localeCompare(m2.name))
        .map((m) => (
          <Item
            type={m.type}
            id={m.id}
            name={m.name}
            releaseDate={m.releaseDate
              ? dayjs(m.releaseDate).format("YYYY")
              : ""}
            posterPath={m.posterPath}
            status={m.status}
            action={<Icon.Remove onClick={() => removeMovie(m.id)} />}
            link
          />
        ))}
    </>
  );
}
