import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { dayjs } from "./dayjs.ts";
import { GlobalStyle, theme } from "./global.tsx";
import { useLocalStorage } from "./hooks.ts";
import { Api } from "./api.ts";
import type { Item } from "./types.ts";
import { Main } from "./shared/elements.tsx";
import { Nav } from "./shared/nav.tsx";
import { MissingApiKey } from "./shared/missing-api-key.tsx";
import { ItemList } from "./shared/item-list.tsx";
import { Loader } from "./shared/loader.tsx";
import { Library } from "./library/mod.tsx";
import { Trending } from "./trending/mod.tsx";
import { Settings } from "./settings/mod.tsx";
import { ShowDetails } from "./details/show.tsx";
import { MovieDetails } from "./details/movie.tsx";
import { PersonDetails } from "./details/person.tsx";
import { F1Details } from "./details/f1.tsx";

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
  const [loading, setLoading] = useState<boolean>(false);

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
      const api = new Api(apiKey);
      const valid = await api.isApiKeyValid();
      setValidApiKey(valid);

      if (valid) {
        setLoading(true);
        const showList = await api.fetchShows(showIds);
        const movieList = await api.fetchMovies(movieIds);
        const f1 = f1Active ? await api.fetchF1() : [];

        setShows(showList);
        setMovies(movieList);
        setF1(f1);

        setLoading(false);
      }
    })();
  }, [showIds.length, movieIds.length, apiKey, f1Active]);

  const items: Item[] = [
    ...shows.map((s) =>
      s.episodes!.map((e) => ({ ...e, id: s.id, link: `/show/${s.id}` }))
    ),
    ...movies.map((m) => ({ ...m, link: `/movie/${m.id}` })),
    ...f1.map((f) => ({ ...f, link: `/f1/${f.id}` })),
  ]
    .flat();

  const recent: Item[] = items
    .filter((i) =>
      dayjs(i?.releaseDate).isBetween(dayjs().subtract(500, "year"), dayjs())
    ).sort((i1, i2) =>
      dayjs(i2.releaseDate).valueOf() - dayjs(i1.releaseDate).valueOf()
    );

  const upcoming: Item[] = items
    .filter((i) =>
      dayjs(i?.releaseDate).isBetween(dayjs(), dayjs().add(500, "year"))
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
                  showIds={shows.map((s) => s.id)}
                  movieIds={movies.map((m) => m.id)}
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
              path="/trending"
              element={
                <Trending
                  apiKey={apiKey}
                  showIds={shows.map((s) => s.id)}
                  movieIds={movies.map((m) => m.id)}
                  addShow={addShow}
                  addMovie={addMovie}
                />
              }
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
              path="/show/:id"
              element={<ShowDetails apiKey={apiKey} />}
            />
            <Route
              path="/movie/:id"
              element={<MovieDetails apiKey={apiKey} />}
            />
            <Route
              path="/person/:id"
              element={<PersonDetails apiKey={apiKey} />}
            />
            <Route
              path="/f1/:id"
              element={<F1Details apiKey={apiKey} />}
            />
          </Routes>
        </Main>
        <Nav />
        <MissingApiKey missing={apiKey === ""} invalid={!validApiKey} />
        {loading ? <Loader /> : null}
        <GlobalStyle />
      </ThemeProvider>
    </HashRouter>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
