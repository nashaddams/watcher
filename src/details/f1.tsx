import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import type { F1DetailsRes } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { Api } from "../api.ts";
import { Loader } from "../shared/loader.tsx";
import { H1 } from "../shared/elements.tsx";
import { Foreground, ReleaseYear, Tagline } from "./shared/elements.tsx";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 136px 32px 64px 64px;
  gap: 4px;
  margin-bottom: 12px;
`;

export function F1Details({ apiKey }: { apiKey: string }) {
  const { id } = useParams();
  const [details, setDetails] = useState<F1DetailsRes>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (id) {
        const api = new Api(apiKey);
        setLoading(true);
        setDetails(await api.fetchF1Details(+id));
        setLoading(false);
      }
    })();
  }, [id]);

  if (details) {
    const { name, location, round, sessions } = details;
    const format1 = "ddd";
    const format2 = "DD. MMM";
    const format3 = "HH:mm";

    return (
      <>
        <Foreground>
          <H1 style={{ marginBottom: "6px" }}>{name}</H1>
          <Tagline>
            {location}
          </Tagline>
          <ReleaseYear style={{ marginBottom: "12px" }}>
            {round}
          </ReleaseYear>

          <Grid>
            <div>Free Practice 1:</div>
            <div>{dayjs(sessions.fp1).format(format1)}</div>
            <div>{dayjs(sessions.fp1).format(format2)}</div>
            <div>{dayjs(sessions.fp1).format(format3)}</div>
            {sessions.fp2
              ? (
                <>
                  <div>Free Practice 2:</div>
                  <div>{dayjs(sessions.fp2).format(format1)}</div>
                  <div>{dayjs(sessions.fp2).format(format2)}</div>
                  <div>{dayjs(sessions.fp2).format(format3)}</div>
                </>
              )
              : null}
            {sessions.fp3
              ? (
                <>
                  <div>Free Practice 3:</div>
                  <div>{dayjs(sessions.fp3).format(format1)}</div>
                  <div>{dayjs(sessions.fp3).format(format2)}</div>
                  <div>{dayjs(sessions.fp3).format(format3)}</div>
                </>
              )
              : null}
            {sessions.sprintQualifying
              ? (
                <>
                  <div>Sprint Qualifying:</div>
                  <div>{dayjs(sessions.sprintQualifying).format(format1)}</div>
                  <div>{dayjs(sessions.sprintQualifying).format(format2)}</div>
                  <div>{dayjs(sessions.sprintQualifying).format(format3)}</div>
                </>
              )
              : null}
            {sessions.sprint
              ? (
                <>
                  <div>Sprint:</div>
                  <div>{dayjs(sessions.sprint).format(format1)}</div>
                  <div>{dayjs(sessions.sprint).format(format2)}</div>
                  <div>{dayjs(sessions.sprint).format(format3)}</div>
                </>
              )
              : null}
          </Grid>
          <Grid>
            <div>Qualifying:</div>
            <div>{dayjs(sessions.qualifying).format(format1)}</div>
            <div>{dayjs(sessions.qualifying).format(format2)}</div>
            <div>{dayjs(sessions.qualifying).format(format3)}</div>
            <div>Grand Prix:</div>
            <div>{dayjs(sessions.gp).format(format1)}</div>
            <div>{dayjs(sessions.gp).format(format2)}</div>
            <div>{dayjs(sessions.gp).format(format3)}</div>
          </Grid>
        </Foreground>
        {loading ? <Loader /> : null}
      </>
    );
  }

  return null;
}
