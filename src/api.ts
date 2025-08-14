import { TmdbApi } from "@nashaddams/tmdb/v3";
import { dayjs } from "./dayjs.ts";
import type { Item, MovieDetailsRes, ShowDetailsRes } from "./types.ts";

export async function isApiKeyValid(apiKey: string) {
  const api = new TmdbApi(apiKey);
  const { success } = await api.authenticationValidateKey();
  return success;
}

export async function search(
  apiKey: string,
  query: string,
): Promise<{ shows: Item[]; movies: Item[] }> {
  if (query !== "") {
    const api = new TmdbApi(apiKey);
    return {
      shows: (await api.searchTv({ query })).results.map((r) => ({
        type: "show",
        id: r.id,
        name: r.name ?? r.original_name,
        releaseDate: r.first_air_date,
        posterPath: r.poster_path ?? r.backdrop_path,
      })),
      movies: (await api.searchMovie({ query })).results.map((r) => ({
        type: "movie",
        id: r.id,
        name: r.title ?? r.original_title,
        releaseDate: r.release_date,
        posterPath: r.poster_path ?? r.backdrop_path,
      })),
    };
  }
  return {
    shows: [],
    movies: [],
  };
}

export async function fetchShow(apiKey: string, id: number): Promise<Item> {
  const api = new TmdbApi(apiKey);
  const details = await api.tvSeriesDetails({ series_id: id });
  const episodes: Item[] = (await Promise.all(
    details.seasons
      .filter((s) =>
        dayjs(s.air_date).isBetween(
          dayjs().subtract(1, "year"),
          dayjs().add(1, "year"),
        )
      )
      .flatMap(async (s) =>
        (await api.tvSeasonDetails({
          series_id: details.id,
          season_number: s.season_number,
        })).episodes.map((e) => ({
          type: "show" as Item["type"],
          id: e.id,
          name: details.name,
          releaseDate: e.air_date,
          posterPath: details.poster_path ?? details.backdrop_path,
          description: `S${e.season_number}E${e.episode_number} ${e.name}`,
        }))
      ),
  )).flat();

  return {
    type: "show",
    id: details.id,
    name: details.name ?? details.original_name,
    releaseDate: details.first_air_date,
    posterPath: details.poster_path ?? details.backdrop_path,
    status: details.status,
    episodes,
  };
}

export async function fetchMovie(apiKey: string, id: number): Promise<Item> {
  const api = new TmdbApi(apiKey);
  const details = await api.movieDetails({ movie_id: id });
  return {
    type: "movie",
    id: details.id,
    name: details.title ?? details.original_title,
    releaseDate: details.release_date,
    posterPath: details.poster_path ?? details.backdrop_path,
    status: details.status,
  };
}

export async function fetchDetails(
  apiKey: string,
  id: number,
  type: Item["type"],
): Promise<{ show?: ShowDetailsRes; movie?: MovieDetailsRes }> {
  const api = new TmdbApi(apiKey);

  if (type === "show") {
    return {
      show: await api.tvSeriesDetails({
        series_id: id,
        append_to_response: "credits,external_ids",
      }),
    };
  }

  return {
    movie: await api.movieDetails({
      movie_id: id,
      append_to_response: "credits,external_ids",
    }),
  };
}

export async function fetchF1(): Promise<Item[]> {
  const { races } = await (await fetch(
    `https://raw.githubusercontent.com/sportstimes/f1/refs/heads/main/_db/f1/${
      dayjs().format("YYYY")
    }.json`,
  )).json();

  return races.map((r: {
    name: string;
    location: string;
    slug: string;
    sessions: { gp: string };
  }) => ({
    type: "f1",
    id: r.slug,
    name: r.name,
    description: r.location,
    releaseDate: r.sessions.gp,
  }));
}
