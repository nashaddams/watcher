import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { dayjs } from "../dayjs.ts";
import type { ShowDetailsRes } from "../types.ts";
import { Api } from "../api.ts";
import { Loader } from "../shared/loader.tsx";
import { H1 } from "../shared/elements.tsx";
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

function parseNetworkLogos(networks: ShowDetailsRes["networks"]): string[] {
  const logos = new Map<string, string>();
  // The entry with the lowest ID number is the original entry
  // and the entries with higher ID numbers are duplicates.
  const sorted = networks.sort((n1, n2) => n1.id - n2.id);

  for (const network of sorted) {
    if (!logos.has(network.name)) {
      logos.set(network.name, network.logo_path);
    }
  }

  return [...logos.values()];
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

export function ShowDetails({ apiKey }: { apiKey: string }) {
  const { id } = useParams();
  const [details, setDetails] = useState<ShowDetailsRes>();
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchShowDetails(+id));
        setLoading(false);
      }
    })();
  }, [id]);

  if (details) {
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
      networks,
      similar,
    } = details;

    return (
      <>
        <Background src={poster_path} />
        <Foreground>
          <H1 style={{ marginBottom: "6px" }}>{name || original_name}</H1>
          <Tagline>{tagline}</Tagline>
          <ReleaseYear>
            {first_air_date ? dayjs(first_air_date).format("YYYY") : status}
          </ReleaseYear>
          {genres.map((g) => <Genre key={g.id}>{g.name}</Genre>)}
          {parseNetworkLogos(networks).map((logo) => (
            <NetworkLogo key={logo} src={logo} />
          ))}
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
                title: r.name || r.original_name,
                description: r.first_air_date
                  ? dayjs(r.first_air_date).format("YYYY")
                  : undefined,
                link: `/show/${r.id}`,
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
