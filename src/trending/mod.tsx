import { useEffect, useState } from "react";
import type { Item as ItemType } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { Api } from "../api.ts";
import { H1 } from "../shared/elements.tsx";
import { Item } from "../shared/item.tsx";
import { Loader } from "../shared/loader.tsx";
import { Icon } from "../library/icons.tsx";

type Props = {
  apiKey: string;
  showIds: number[];
  movieIds: number[];
  addShow: (id: number) => void;
  addMovie: (id: number) => void;
};

export function Trending(
  { apiKey, showIds, movieIds, addShow, addMovie }: Props,
) {
  const [shows, setShows] = useState<ItemType[]>([]);
  const [movies, setMovies] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const api = new Api(apiKey);
      const valid = await api.isApiKeyValid();

      if (valid) {
        setLoading(true);
        const { shows, movies } = await api.fetchTrending();
        setShows(shows);
        setMovies(movies);
        setLoading(false);
      }
    })();
  }, [apiKey]);

  return (
    <>
      <H1>Trending</H1>
      {shows.map((s) => (
        <Item
          id={s.id}
          name={s.name}
          releaseDate={s.releaseDate ? dayjs(s.releaseDate).format("YYYY") : ""}
          posterPath={s.posterPath}
          status={s.status}
          action={showIds.includes(s.id)
            ? <Icon.Added />
            : <Icon.Add onClick={() => addShow(s.id)} />}
          link={`/show/${s.id}`}
        />
      ))}
      {movies.map((m) => (
        <Item
          id={m.id}
          name={m.name}
          releaseDate={m.releaseDate ? dayjs(m.releaseDate).format("YYYY") : ""}
          posterPath={m.posterPath}
          status={m.status}
          action={movieIds.includes(m.id)
            ? <Icon.Added />
            : <Icon.Add onClick={() => addMovie(m.id)} />}
          link={`/movie/${m.id}`}
        />
      ))}
      {loading ? <Loader /> : null}
    </>
  );
}
