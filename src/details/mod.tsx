import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { type MovieDetailsRes, type ShowDetailsRes } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { fetchDetails } from "../api.ts";
import { H1 } from "../shared/h1.tsx";
import { Gallery } from "./gallery.tsx";
import { Icon } from "./imdb.tsx";

const Background = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.2;
`;

const Foreground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const Tagline = styled.div`
  font-size: 1.4rem;
  text-wrap: balance;
`;

const ReleaseYear = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
`;

const Genre = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 4px 6px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  margin: 4px 4px 4px 0;
`;

const P = styled.p`
  margin: 12px 0 12px 0;
  padding: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 4px;
  margin-bottom: 24px;
`;

export function Details({ apiKey }: { apiKey: string }) {
  const { id } = useParams();
  const [search] = useSearchParams();
  const [details, setDetails] = useState<
    { show?: ShowDetailsRes; movie?: MovieDetailsRes }
  >();

  useEffect(() => {
    (async () => {
      setDetails(await fetchDetails(apiKey, +id, search.get("type")));
    })();
  }, [id]);

  if (details?.show) {
    const {
      poster_path,
      name,
      original_name,
      first_air_date,
      status,
      genres,
      tagline,
      overview,
      created_by,
      number_of_seasons,
      number_of_episodes,
      credits,
      external_ids,
    } = details.show;
    return (
      <>
        <Background src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <Foreground>
          <H1 style={{ marginBottom: "6px" }}>{name || original_name}</H1>
          <Tagline>{tagline}</Tagline>
          <ReleaseYear>
            {first_air_date ? dayjs(first_air_date).format("YYYY") : status}
          </ReleaseYear>
          {genres.map((g) => <Genre key={g.id}>{g.name}</Genre>)}
          <P>{overview}</P>
          <Grid>
            <div>Created by:</div>
            <div>{created_by.map((c) => c.name).join(", ")}</div>
            <div>Seasons:</div>
            <div>{number_of_seasons}</div>
            <div>Episodes:</div>
            <div>{number_of_episodes}</div>
          </Grid>
          <Gallery
            title="Cast"
            items={credits?.cast.slice(0, 12).map((c) => ({
              posterPath: c.profile_path,
              title: c.name || c.original_name,
              description: c.character,
            }))}
          />
          <Gallery
            title="Crew"
            items={credits?.crew.slice(0, 12).map((c) => ({
              posterPath: c.profile_path,
              title: c.name || c.original_name,
              description: c.job,
            }))}
          />
          <a
            href={`https://www.imdb.com/title/${external_ids?.imdb_id}`}
            target="_blank"
          >
            <Icon />
          </a>
        </Foreground>
      </>
    );
  } else if (details?.movie) {
    const {
      poster_path,
      title,
      original_title,
      release_date,
      status,
      genres,
      tagline,
      overview,
      runtime,
      credits,
      external_ids,
    } = details.movie;
    return (
      <>
        <Background src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <Foreground>
          <H1 style={{ marginBottom: "6px" }}>{title || original_title}</H1>
          <Tagline>{tagline}</Tagline>
          <ReleaseYear>
            {release_date ? dayjs(release_date).format("YYYY") : status}
          </ReleaseYear>
          {genres.map((g) => <Genre key={g.id}>{g.name}</Genre>)}
          <P>{overview}</P>
          <P>Runtime: {runtime} minutes</P>
          <Gallery
            title="Cast"
            items={credits?.cast.slice(0, 12).map((c) => ({
              posterPath: c.profile_path,
              title: c.name || c.original_name,
              description: c.character,
            }))}
          />
          <Gallery
            title="Crew"
            items={credits?.crew.filter((c) => c.job.includes("Producer"))
              .slice(0, 12).map((
                c,
              ) => ({
                posterPath: c.profile_path,
                title: c.name || c.original_name,
                description: c.job,
              }))}
          />

          <a
            href={`https://www.imdb.com/title/${external_ids?.imdb_id}`}
            target="_blank"
          >
            <Icon />
          </a>
        </Foreground>
      </>
    );
  }
}

// SHOW
// in_production: boolean;
// languages: string[];
// last_air_date: string;
// last_episode_to_air: {
//   id: number;
//   name: string;
//   overview: string;
//   vote_average: number;
//   vote_count: number;
//   air_date: string;
//   episode_number: number;
//   production_code: string;
//   runtime: number;
//   season_number: number;
//   show_id: number;
//   still_path: string;
// };
// next_episode_to_air: unknown;
// networks: {
//   id: number;
//   logo_path: string;
//   name: string;
//   origin_country: string;
// }[];
// origin_country: string[];
// original_language: string;
// original_name: string;
// popularity: number;
// production_companies: {
//   id: number;
//   logo_path: string;
//   name: string;
//   origin_country: string;
// }[];
// production_countries: { iso_3166_1: string; name: string }[];
// vote_average: number;
// vote_count: number;

// MOVIE
// budget: number;
// genres: { id: number; name: string }[];
// imdb_id: string;
// original_language: string;
// original_title: string;
// popularity: number;
// production_companies: {
//   id: number;
//   logo_path: string;
//   name: string;
//   origin_country: string;
// }[];
// production_countries: { iso_3166_1: string; name: string }[];
// revenue: number;
// runtime: number;
// spoken_languages: {
//   english_name: string;
//   iso_639_1: string;
//   name: string;
// }[];
// video: boolean;
// vote_average: number;
// vote_count: number;
