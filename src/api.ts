import { TmdbApi } from "@nashaddams/tmdb/v3";
import { dayjs } from "./dayjs.ts";
import type {
  F1DetailsRes,
  Item,
  MovieDetailsRes,
  PersonDetailsRes,
  ShowDetailsRes,
} from "./types.ts";

export class Api {
  #apiKey: string;
  #tmdbApi: TmdbApi;

  constructor(apiKey: string) {
    this.#apiKey = apiKey;
    this.#tmdbApi = new TmdbApi(apiKey);
  }

  #inferPosterPath(posterPath: string, width: 200 | 500 = 200): string {
    return posterPath
      ? `https://image.tmdb.org/t/p/w${width}${posterPath}`
      : posterPath;
  }

  async isApiKeyValid(): Promise<boolean> {
    const { success } = await this.#tmdbApi.authenticationValidateKey();
    return success;
  }

  async search(query: string): Promise<{ shows: Item[]; movies: Item[] }> {
    if (query !== "") {
      const api = new TmdbApi(this.#apiKey);
      return {
        shows: (await api.searchTv({ query })).results.map((r) => ({
          id: r.id,
          name: r.name ?? r.original_name,
          releaseDate: r.first_air_date,
          posterPath: this.#inferPosterPath(r.poster_path),
        })),
        movies: (await api.searchMovie({ query })).results.map((r) => ({
          id: r.id,
          name: r.title ?? r.original_title,
          releaseDate: r.release_date,
          posterPath: this.#inferPosterPath(r.poster_path),
        })),
      };
    }
    return {
      shows: [],
      movies: [],
    };
  }

  async fetchShows(ids: number[]): Promise<Item[]> {
    return await Promise.all(
      ids.map(async (id) => {
        const show = await this.#tmdbApi.tvSeriesDetails({ series_id: id });
        const episodes: Item[] = (await Promise.all(
          show.seasons
            .filter((s) =>
              dayjs(s.air_date).isBetween(
                dayjs().subtract(1, "year"),
                dayjs().add(1, "year"),
              )
            )
            .flatMap(async (s) =>
              (await this.#tmdbApi.tvSeasonDetails({
                series_id: show.id,
                season_number: s.season_number,
              })).episodes.map((e) => ({
                id: e.id,
                name: show.name,
                releaseDate: e.air_date,
                posterPath: this.#inferPosterPath(show.poster_path),
                description:
                  `S${e.season_number}E${e.episode_number} ${e.name}`,
              }))
            ),
        )).flat();

        return {
          id: show.id,
          name: show.name ?? show.original_name,
          releaseDate: show.first_air_date,
          posterPath: this.#inferPosterPath(show.poster_path),
          status: show.status,
          episodes,
        };
      }),
    );
  }

  async fetchShowDetails(id: number): Promise<ShowDetailsRes> {
    const show = await this.#tmdbApi.tvSeriesDetails({
      series_id: id,
      append_to_response: "credits,external_ids,similar",
    }) as ShowDetailsRes;

    return {
      ...show,
      poster_path: this.#inferPosterPath(show.poster_path, 500),
      credits: {
        cast: show.credits!.cast.map((c) => ({
          ...c,
          profile_path: this.#inferPosterPath(c.profile_path),
        })),
        crew: show.credits!.crew.map((c) => ({
          ...c,
          profile_path: this.#inferPosterPath(c.profile_path),
        })),
      },
      networks: show.networks.map((n) => ({
        ...n,
        logo_path: this.#inferPosterPath(n.logo_path),
      })),
      similar: {
        ...show.similar!,
        results: show.similar!.results.map((r) => ({
          ...r,
          poster_path: this.#inferPosterPath(r.poster_path),
        })),
      },
    };
  }

  async fetchMovies(ids: number[]): Promise<Item[]> {
    return await Promise.all(
      ids.map(async (id) => {
        const movie = await this.#tmdbApi.movieDetails({ movie_id: id });
        return {
          id: movie.id,
          name: movie.title ?? movie.original_title,
          releaseDate: movie.release_date,
          posterPath: this.#inferPosterPath(movie.poster_path),
          status: movie.status,
        };
      }),
    );
  }

  async fetchMovieDetails(id: number): Promise<MovieDetailsRes> {
    const movie = await this.#tmdbApi.movieDetails({
      movie_id: id,
      append_to_response: "credits,external_ids,similar",
    }) as MovieDetailsRes;

    return {
      ...movie,
      poster_path: this.#inferPosterPath(movie.poster_path, 500),
      credits: {
        cast: movie.credits!.cast.map((c) => ({
          ...c,
          profile_path: this.#inferPosterPath(c.profile_path),
        })),
        crew: movie.credits!.crew.map((c) => ({
          ...c,
          profile_path: this.#inferPosterPath(c.profile_path),
        })),
      },
      production_companies: movie.production_companies.map((pc) => ({
        ...pc,
        logo_path: this.#inferPosterPath(pc.logo_path),
      })),
      similar: {
        ...movie.similar!,
        results: movie.similar!.results.map((r) => ({
          ...r,
          poster_path: this.#inferPosterPath(r.poster_path),
        })),
      },
    };
  }

  async fetchPersonDetails(id: number): Promise<PersonDetailsRes> {
    const person = await this.#tmdbApi.personDetails({
      person_id: id,
      append_to_response: "images,tv_credits,movie_credits",
    }) as PersonDetailsRes;

    return {
      ...person,
      profile_path: this.#inferPosterPath(person.profile_path),
      images: {
        ...person.images!,
        profiles: person.images!.profiles.map((p) => ({
          ...p,
          file_path: this.#inferPosterPath(p.file_path),
        })),
      },
      tv_credits: {
        ...person.tv_credits!,
        cast: person.tv_credits!.cast.map((c) => ({
          ...c,
          poster_path: this.#inferPosterPath(c.poster_path),
        })),
      },
      movie_credits: {
        ...person.movie_credits!,
        cast: person.movie_credits!.cast.map((c) => ({
          ...c,
          poster_path: this.#inferPosterPath(c.poster_path),
        })),
      },
    };
  }

  async fetchTrending(): Promise<{ shows: Item[]; movies: Item[] }> {
    return {
      shows: (await this.#tmdbApi.trendingTv({ time_window: "week" })).results
        .map((r) => ({
          id: r.id,
          name: r.name ?? r.original_name,
          releaseDate: r.first_air_date,
          posterPath: this.#inferPosterPath(r.poster_path),
        })),
      movies: (await this.#tmdbApi.trendingMovies({ time_window: "week" }))
        .results.map(
          (r) => ({
            id: r.id,
            name: r.title ?? r.original_title,
            releaseDate: r.release_date,
            posterPath: this.#inferPosterPath(r.poster_path),
          }),
        ),
    };
  }

  async fetchF1(): Promise<Item[]> {
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
      id: dayjs(r.sessions.gp).unix(),
      name: `${r.name.replace("Grand Prix", "").trim()} Grand Prix`,
      description: r.location,
      releaseDate: r.sessions.gp,
      posterPath:
        "https://raw.githubusercontent.com/nashaddams/watcher/refs/heads/main/public/f1.svg",
    }));
  }

  async fetchF1Details(id: number): Promise<F1DetailsRes> {
    const { races } = await (await fetch(
      `https://raw.githubusercontent.com/sportstimes/f1/refs/heads/main/_db/f1/${
        dayjs().format("YYYY")
      }.json`,
    )).json() as { races: F1DetailsRes[] };

    const race = races.find((r) => dayjs(r.sessions.gp).unix() === id)!;

    return {
      ...race,
      name: `${race.name.replace("Grand Prix", "").trim()} Grand Prix`,
      round: `${race.round} / ${races.length}`,
    };
  }
}
