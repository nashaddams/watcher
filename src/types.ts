import { TmdbApi } from "@nashaddams/tmdb/v3";

export type Item = {
  id: number;
  name: string;
  releaseDate: string;
  posterPath: string;
  status?: string;
  description?: string;
  episodes?: Item[];
  action?: React.ReactElement;
  link?: string;
};

export type ShowDetailsRes =
  & Awaited<ReturnType<typeof TmdbApi.prototype.tvSeriesDetails>>
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
    similar?: Awaited<ReturnType<typeof TmdbApi.prototype.tvSeriesSimilar>>;
  };

export type MovieDetailsRes =
  & Awaited<ReturnType<typeof TmdbApi.prototype.movieDetails>>
  & {
    credits?: {
      cast: Awaited<ReturnType<typeof TmdbApi.prototype.movieCredits>>["cast"];
      crew: Awaited<ReturnType<typeof TmdbApi.prototype.movieCredits>>["crew"];
    };
    external_ids?: Awaited<
      ReturnType<typeof TmdbApi.prototype.movieExternalIds>
    >;
    similar?: Awaited<ReturnType<typeof TmdbApi.prototype.movieSimilar>>;
  };

export type PersonDetailsRes =
  & Awaited<ReturnType<typeof TmdbApi.prototype.personDetails>>
  & {
    images?: Awaited<
      ReturnType<typeof TmdbApi.prototype.personImages>
    >;
    tv_credits?: Awaited<
      ReturnType<typeof TmdbApi.prototype.personTvCredits>
    >;
    movie_credits?: Awaited<
      ReturnType<typeof TmdbApi.prototype.personMovieCredits>
    >;
  };

export type F1DetailsRes = {
  id: string;
  name: string;
  location: string;
  round: string;
  sessions: {
    fp1: string;
    fp2?: string;
    fp3?: string;
    sprintQualifying?: string;
    sprint?: string;
    qualifying: string;
    gp: string;
  };
};
