import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { dayjs } from "./dayjs.ts";
import { GlobalStyle, theme } from "./global.tsx";
import { useLocalStorage } from "./hooks.ts";
import { fetchF1, fetchMovie, fetchShow, isApiKeyValid } from "./api.ts";
import type { Item } from "./types.ts";
import { Main } from "./shared/main.tsx";
import { Nav } from "./shared/nav.tsx";
import { MissingApiKey } from "./shared/missing-api-key.tsx";
import { ItemList } from "./shared/item-list.tsx";
import { Library } from "./library/mod.tsx";
import { Settings } from "./settings/mod.tsx";
import { Details } from "./details/mod.tsx";

function App() {
  const [apiKey, setApiKey] = useLocalStorage<string>(
    "WATCHER_TMDB_API_KEY_V1",
    "",
  );
  const [showIds, setShowIds] = useLocalStorage<number[]>(
    "WATCHER_SHOW_IDS_V1",
    [],
  );
  const [movieIds, setMovieIds] = useLocalStorage<number[]>(
    "WATCHER_MOVIE_IDS_V1",
    [],
  );
  const [f1Active, setF1Active] = useLocalStorage<boolean>(
    "WATCHER_F1_ACTIVE_V1",
    false,
  );
  const [validApiKey, setValidApiKey] = useState<boolean>(true);
  const [shows, setShows] = useState<Item[]>([]);
  const [movies, setMovies] = useState<Item[]>([]);
  const [f1, setF1] = useState<Item[]>([]);

  const addApiKey = (apiKey: string) => {
    setApiKey(apiKey);
  };
  const addShow = (id: number) => {
    setShowIds([...new Set([...showIds, id])]);
  };
  const addMovie = (id: number) => {
    setMovieIds([...new Set([...movieIds, id])]);
  };
  const removeShow = (id: number) => {
    setShowIds(showIds.filter((sid) => sid !== id));
  };
  const removeMovie = (id: number) => {
    setMovieIds(movieIds.filter((mid) => mid !== id));
  };
  const restoreShowsAndMovies = (
    { shows, movies }: { shows: number[]; movies: number[] },
  ) => {
    setShowIds(shows);
    setMovieIds(movies);
  };
  const activateF1 = (active: boolean) => {
    setF1Active(active);
  };

  useEffect(() => {
    (async () => {
      const valid = await isApiKeyValid(apiKey);
      setValidApiKey(valid);

      if (valid) {
        const showList = await Promise.all(
          showIds.map((id) => fetchShow(apiKey, id)),
        );
        const movieList = await Promise.all(
          movieIds.map((id) => fetchMovie(apiKey, id)),
        );

        setShows(showList);
        setMovies(movieList);
      }
    })();
  }, [showIds.length, movieIds.length, apiKey]);

  useEffect(() => {
    (async () => {
      if (f1Active) {
        setF1(await fetchF1());
      } else {
        setF1([]);
      }
    })();
  }, [f1Active]);

  const recent: Item[] = [
    ...shows.map((s) => s.episodes!.map((e) => ({ ...e, id: s.id }))),
    ...movies,
    ...f1,
  ]
    .flat()
    .filter((i) =>
      dayjs(i?.releaseDate).isBetween(dayjs().subtract(10, "year"), dayjs())
    ).sort((i1, i2) =>
      dayjs(i2.releaseDate).valueOf() - dayjs(i1.releaseDate).valueOf()
    );

  const upcoming: Item[] = [
    ...shows.map((s) => s.episodes!.map((e) => ({ ...e, id: s.id }))),
    ...movies,
    ...f1,
  ]
    .flat()
    .filter((i) =>
      dayjs(i?.releaseDate).isBetween(dayjs(), dayjs().add(10, "year"))
    ).sort((i1, i2) =>
      dayjs(i1.releaseDate).valueOf() - dayjs(i2.releaseDate).valueOf()
    );

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Main>
          <Routes>
            <Route
              index
              element={<ItemList title="Recent" items={recent} />}
            />
            <Route
              path="/library"
              element={
                <Library
                  apiKey={apiKey}
                  shows={shows}
                  movies={movies}
                  addShow={addShow}
                  addMovie={addMovie}
                  removeShow={removeShow}
                  removeMovie={removeMovie}
                />
              }
            />
            <Route
              path="/upcoming"
              element={<ItemList title="Upcoming" items={upcoming} />}
            />
            <Route
              path="/settings"
              element={
                <Settings
                  addApiKey={addApiKey}
                  showIds={shows.map((s) => s.id)}
                  movieIds={movies.map((m) => m.id)}
                  restoreShowsAndMovies={restoreShowsAndMovies}
                  f1Active={f1Active}
                  activateF1={activateF1}
                />
              }
            />
            <Route
              path="/details/:id"
              element={<Details apiKey={apiKey} />}
            />
          </Routes>
        </Main>
        <Nav />
        <MissingApiKey missing={apiKey === ""} invalid={!validApiKey} />
        <GlobalStyle />
      </ThemeProvider>
    </HashRouter>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
