import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import type { MovieDetailsRes } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { Api } from "../api.ts";
import { H1 } from "../shared/elements.tsx";
import { Loader } from "../shared/loader.tsx";
import {
  Background,
  Foreground,
  Genre,
  Grid,
  P,
  ReleaseYear,
  Tagline,
} from "./shared/elements.tsx";
import { Gallery } from "./shared/gallery.tsx";
import { Icon } from "./shared/icons.tsx";

function humanizeRuntime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const humanized: string[] = [];

  if (hours === 1) {
    humanized.push(`${hours} hour`);
  } else if (hours > 1) {
    humanized.push(`${hours} hours`);
  }

  if (minutes === 1) {
    humanized.push(`${minutes} minute`);
  } else if (minutes > 1) {
    humanized.push(`${minutes} minutes`);
  }

  return humanized.join(" ");
}

const NetworkLogo = styled.img`
  display: inline-block;
  vertical-align: top;
  height: 1.35rem;
  width: auto;
  margin: 4px 4px 4px 0;
  border-top: 4px;
  border-bottom: 4px;
  border-right: 6px;
  border-left: 6px;
  border-style: solid;
  border-color: white;
  background-color: white;
  border-radius: 6px;
`;

export function MovieDetails({ apiKey }: { apiKey: string }) {
  const { id } = useParams();
  const [details, setDetails] = useState<MovieDetailsRes>();
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchMovieDetails(+id));
        setLoading(false);
      }
    })();
  }, [id]);

  if (details) {
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
      production_companies,
      budget,
      revenue,
      similar,
    } = details;

    const humanizedRuntime = humanizeRuntime(runtime);

    return (
      <>
        <Background src={poster_path} />
        <Foreground>
          <H1 style={{ marginBottom: "6px" }}>{title || original_title}</H1>
          <Tagline>{tagline}</Tagline>
          <ReleaseYear>
            {release_date ? dayjs(release_date).format("YYYY") : status}
          </ReleaseYear>
          {genres.map((g) => <Genre key={g.id}>{g.name}</Genre>)}
          {production_companies.filter((pc) => pc.logo_path).map((pc) => (
            <NetworkLogo key={pc.id} src={pc.logo_path} />
          ))}
          <P>{overview}</P>
          <Grid>
            {humanizedRuntime
              ? (
                <>
                  <div>Runtime:</div>
                  <div>{humanizedRuntime}</div>
                </>
              )
              : null}
            {budget > 0
              ? (
                <>
                  <div>Budget:</div>
                  <div>{budget.toLocaleString()} USD</div>
                </>
              )
              : null}
            {revenue > 0
              ? (
                <>
                  <div>Revenue:</div>
                  <div>{revenue.toLocaleString()} USD</div>
                </>
              )
              : null}
          </Grid>
          <Gallery
            title="Cast"
            items={credits?.cast.slice(0, 24).map((c) => ({
              id: c.id,
              posterPath: c.profile_path,
              title: c.name || c.original_name,
              description: c.character,
              link: `/person/${c.id}`,
            }))}
          />
          <Gallery
            title="Crew"
            items={credits?.crew
              .filter((c) => c.job.includes("Producer"))
              .slice(0, 24)
              .map((c) => ({
                id: c.id,
                posterPath: c.profile_path,
                title: c.name || c.original_name,
                description: c.job,
                link: `/person/${c.id}`,
              }))}
          />
          <Gallery
            title="Similar"
            items={similar?.results
              .slice(0, 24)
              .map((r) => ({
                id: r.id,
                posterPath: r.poster_path,
                title: r.title || r.original_title,
                description: r.release_date
                  ? dayjs(r.release_date).format("YYYY")
                  : undefined,
                link: `/movie/${r.id}`,
              }))}
          />
          <a
            href={`https://www.imdb.com/title/${external_ids?.imdb_id}`}
            target="_blank"
          >
            <Icon.Imdb />
          </a>
        </Foreground>
        {loading ? <Loader /> : null}
      </>
    );
  }

  return null;
}
