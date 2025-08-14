import { TmdbApi } from "@nashaddams/tmdb/v3";

export type Item = {
  type: "show" | "movie" | "f1";
  id: number;
  name: string;
  releaseDate: string;
  posterPath: string;
  status?: string;
  description?: string;
  episodes?: Item[];
  action?: React.ReactElement;
  link?: boolean;
};

export type ShowDetailsRes =
  & Awaited<
    ReturnType<
      typeof TmdbApi.prototype.tvSeriesDetails
    >
  >
  & {
    credits?: {
      cast: Awaited<
        ReturnType<typeof TmdbApi.prototype.tvSeriesCredits>
      >["cast"];
      crew: Awaited<
        ReturnType<typeof TmdbApi.prototype.tvSeriesCredits>
      >["crew"];
    };
    external_ids?: Awaited<
      ReturnType<typeof TmdbApi.prototype.tvSeriesExternalIds>
    >;
  };

export type MovieDetailsRes =
  & Awaited<
    ReturnType<
      typeof TmdbApi.prototype.movieDetails
    >
  >
  & {
    credits?: {
      cast: Awaited<ReturnType<typeof TmdbApi.prototype.movieCredits>>["cast"];
      crew: Awaited<ReturnType<typeof TmdbApi.prototype.movieCredits>>["crew"];
    };
    external_ids?: Awaited<
      ReturnType<typeof TmdbApi.prototype.movieExternalIds>
    >;
  };
