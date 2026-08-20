import type { Item as ItemType } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { Route } from "../routes.ts";
import { H1 } from "../shared/elements.tsx";
import { Item } from "../shared/item.tsx";
import { Search } from "./search.tsx";
import { Icon } from "./icons.tsx";
import { Confirm } from "./confirm.tsx";

type Props = {
  apiKey: string;
  showIds: number[];
  movieIds: number[];
  shows: ItemType[];
  movies: ItemType[];
  addShow: (id: number) => void;
  addMovie: (id: number) => void;
  removeShow: (id: number) => void;
  removeMovie: (id: number) => void;
};

export function Library(
  {
    apiKey,
    showIds,
    movieIds,
    shows,
    movies,
    addShow,
    addMovie,
    removeShow,
    removeMovie,
  }: Props,
) {
  return (
    <>
      <H1>{Route.Library.title}</H1>

      <Search
        apiKey={apiKey}
        showIds={showIds}
        movieIds={movieIds}
        addShow={addShow}
        addMovie={addMovie}
      />
      {shows
        .sort((s1, s2) => s1.name.localeCompare(s2.name))
        .map((s) => (
          <Item
            id={s.id}
            name={s.name}
            releaseDate={s.releaseDate
              ? dayjs(s.releaseDate).format("YYYY")
              : ""}
            posterPath={s.posterPath}
            status={s.status}
            action={
              <Confirm
                message={`Remove "${s.name}"?`}
                onConfirm={() => removeShow(s.id)}
              >
                <Icon.Remove />
              </Confirm>
            }
            link={`/show/${s.id}`}
          />
        ))}
      {movies
        .sort((m1, m2) => m1.name.localeCompare(m2.name))
        .map((m) => (
          <Item
            id={m.id}
            name={m.name}
            releaseDate={m.releaseDate
              ? dayjs(m.releaseDate).format("YYYY")
              : ""}
            posterPath={m.posterPath}
            status={m.status}
            action={
              <Confirm
                message={`Remove "${m.name}"?`}
                onConfirm={() => removeMovie(m.id)}
              >
                <Icon.Remove />
              </Confirm>
            }
            link={`/movie/${m.id}`}
          />
        ))}
    </>
  );
}
