import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { debounce } from "@std/async/debounce";
import { dayjs } from "../dayjs.ts";
import { Color } from "../global.tsx";
import type { Item as ItemType } from "../types.ts";
import { Api } from "../api.ts";
import { Input } from "../shared/elements.tsx";
import { Item } from "../shared/item.tsx";
import { Loader } from "../shared/loader.tsx";
import { Icon } from "./icons.tsx";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
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

type Props = {
  apiKey: string;
  showIds: number[];
  movieIds: number[];
  addShow: (id: number) => void;
  addMovie: (id: number) => void;
};

export function Search(
  { apiKey, showIds, movieIds, addShow, addMovie }: Props,
) {
  const [query, setQuery] = useState<string>("");
  const [shows, setShows] = useState<ItemType[]>([]);
  const [movies, setMovies] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const clear = () => {
    setQuery("");
    setShows([]);
    setMovies([]);
  };

  useEffect(
    debounce(async () => {
      const api = new Api(apiKey);
      const valid = await api.isApiKeyValid();

      if (valid) {
        setLoading(true);
        const { shows: s, movies: m } = await api.search(query);
        setShows(s);
        setMovies(m);
        setLoading(false);
      }
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
                id={s.id}
                name={s.name}
                releaseDate={s.releaseDate
                  ? dayjs(s.releaseDate).format("YYYY")
                  : ""}
                posterPath={s.posterPath}
                status={s.status}
                action={showIds.includes(s.id) ? <Icon.Added /> : (
                  <Icon.Add
                    onClick={() => {
                      addShow(s.id);
                      clear();
                    }}
                  />
                )}
              />
            ))}
            {movies.map((m) => (
              <Item
                id={m.id}
                name={m.name}
                releaseDate={m.releaseDate
                  ? dayjs(m.releaseDate).format("YYYY")
                  : ""}
                posterPath={m.posterPath}
                status={m.status}
                action={movieIds.includes(m.id) ? <Icon.Added /> : (
                  <Icon.Add
                    onClick={() => {
                      addMovie(m.id);
                      clear();
                    }}
                  />
                )}
              />
            ))}
          </Results>
        )
        : null}
      {loading ? <Loader /> : null}
    </>
  );
}
