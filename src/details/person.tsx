import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PersonDetailsRes } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { Api } from "../api.ts";
import { Loader } from "../shared/loader.tsx";
import { H1 } from "../shared/elements.tsx";
import { Foreground, P, ReleaseYear, Tagline } from "./shared/elements.tsx";
import { Gallery } from "./shared/gallery.tsx";
import { Icon } from "./shared/icons.tsx";

export function PersonDetails({ apiKey }: { apiKey: string }) {
  const { id } = useParams();
  const [details, setDetails] = useState<PersonDetailsRes>();
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchPersonDetails(+id));
        setLoading(false);
      }
    })();
  }, [id]);

  if (details) {
    const {
      name,
      place_of_birth,
      birthday,
      biography,
      images,
      tv_credits,
      movie_credits,
      imdb_id,
    } = details;

    return (
      <>
        <Foreground>
          <H1 style={{ marginBottom: "6px" }}>{name}</H1>
          <Tagline>{place_of_birth}</Tagline>
          {birthday
            ? (
              <ReleaseYear>
                {dayjs(birthday).format("LL")}{" "}
                ({dayjs().from(dayjs(birthday), true).replace(" years", "")})
              </ReleaseYear>
            )
            : null}
          <P style={{ marginBottom: "24px" }}>{biography}</P>
          <Gallery
            items={images?.profiles.slice(0, 24).map((p) => ({
              posterPath: p.file_path,
            }))}
          />
          <Gallery
            title="Shows"
            items={tv_credits?.cast.map((c) => ({
              id: c.id,
              posterPath: c.poster_path,
              title: c.name,
              description: c.character,
              link: `/show/${c.id}`,
            }))}
          />
          <Gallery
            title="Movies"
            items={movie_credits?.cast.map((c) => ({
              id: c.id,
              posterPath: c.poster_path,
              title: c.title,
              description: c.character,
              link: `/movie/${c.id}`,
            }))}
          />
          <a href={`https://www.imdb.com/name/${imdb_id}`} target="_blank">
            <Icon.Imdb />
          </a>
        </Foreground>
        {loading ? <Loader /> : null}
      </>
    );
  }

  return null;
}
