import { SVGProps, useEffect, useState } from "react";
import { styled } from "styled-components";
import { debounce } from "@std/async/debounce";
import { dayjs } from "../dayjs.ts";
import { Color } from "../global.tsx";
import type { Item as ItemType } from "../types.ts";
import { search } from "../api.ts";
import { Input } from "../shared/input.tsx";
import { Item } from "../shared/item.tsx";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const SearchSvg = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  margin: auto;
  height: 20px;
`;

const ClearSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  margin: auto;
  height: 20px;
  cursor: pointer;
`;

const AddSvg = styled.svg`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const Results = styled.div`
  position: fixed;
  top: 130px;
  right: 24px;
  left: 24px;
  max-height: calc(100dvh - 220px);
  overflow: hidden;
  overflow-y: auto;
  background-color: ${Color.BgSecondary};
  border-radius: 6px;
  padding: 0 12px 12px 12px;
`;

const Icon = {
  Search: () => (
    <SearchSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
      </path>
    </SearchSvg>
  ),
  Clear: (props: SVGProps<SVGSVGElement>) => (
    <ClearSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      {...props}
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z">
      </path>
    </ClearSvg>
  ),
  Add: (props: SVGProps<SVGSVGElement>) => (
    <AddSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="rgba(255,255,255,1)"
      {...props}
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z">
      </path>
    </AddSvg>
  ),
};

type Props = {
  apiKey: string;
  addShow: (id: number) => void;
  addMovie: (id: number) => void;
};

export function Search({ apiKey, addShow, addMovie }: Props) {
  const [query, setQuery] = useState<string>("");
  const [shows, setShows] = useState<ItemType[]>([]);
  const [movies, setMovies] = useState<ItemType[]>([]);

  const clear = () => {
    setQuery("");
    setShows([]);
    setMovies([]);
  };

  useEffect(
    debounce(async () => {
      const { shows: s, movies: m } = await search(apiKey, query);
      setShows(s);
      setMovies(m);
    }, 300),
    [query],
  );

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          name="search-input"
          placeholder="Shows & Movies"
          autoComplete="off"
          style={{ padding: "6px 36px 6px 32px" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Icon.Search />
        {query !== "" && (
          <Icon.Clear
            onClick={() => clear()}
          />
        )}
      </Wrapper>
      {[...shows, ...movies].length
        ? (
          <Results>
            {shows.map((s) => (
              <Item
                type={s.type}
                id={s.id}
                name={s.name}
                releaseDate={s.releaseDate
                  ? dayjs(s.releaseDate).format("YYYY")
                  : ""}
                posterPath={s.posterPath}
                status={s.status}
                action={
                  <Icon.Add
                    onClick={() => {
                      addShow(s.id);
                      clear();
                    }}
                  />
                }
              />
            ))}
            {movies.map((m) => (
              <Item
                type={m.type}
                id={m.id}
                name={m.name}
                releaseDate={m.releaseDate
                  ? dayjs(m.releaseDate).format("YYYY")
                  : ""}
                posterPath={m.posterPath}
                status={m.status}
                action={
                  <Icon.Add
                    onClick={() => {
                      addMovie(m.id);
                      clear();
                    }}
                  />
                }
              />
            ))}
          </Results>
        )
        : null}
    </>
  );
}
