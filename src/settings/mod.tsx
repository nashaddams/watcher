import type * as React from "react";
import { useEffect } from "react";
import { styled } from "styled-components";
import { H1, H2 } from "../shared/elements.tsx";
import { type NavRoute, type OptionalRoute, Route } from "../routes.ts";
import { ApiKey } from "./api-key.tsx";
import { BackupRestore } from "./backup-restore.tsx";
import { Form } from "./form.tsx";
import { F1 } from "./f1.tsx";
import { Source } from "./source.tsx";

const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 96px;
  }
`;

type Props = {
  addApiKey: (apiKey: string) => void;
  showIds: number[];
  movieIds: number[];
  restoreShowsAndMovies: (args: { shows: number[]; movies: number[] }) => void;
  f1Active: boolean;
  activateF1: (active: boolean) => void;
  defaultHome: NavRoute;
  setDefaultHome: (path: NavRoute) => void;
  disabledPages: OptionalRoute[];
  setDisabledPages: (pages: OptionalRoute[]) => void;
};

export function Settings(
  {
    addApiKey,
    showIds,
    movieIds,
    restoreShowsAndMovies,
    f1Active,
    activateF1,
    defaultHome,
    setDefaultHome,
    disabledPages,
    setDisabledPages,
  }: Props,
) {
  useEffect(() => {
    if (disabledPages.includes(defaultHome as OptionalRoute)) {
      setDefaultHome(Route.Library.path);
    }
  }, [disabledPages]);

  return (
    <>
      <H1>{Route.Settings.title}</H1>

      <Section>
        <ApiKey addApiKey={addApiKey} />
      </Section>

      <Section>
        <BackupRestore
          showIds={showIds}
          movieIds={movieIds}
          restoreShowsAndMovies={restoreShowsAndMovies}
        />
      </Section>

      <Section>
        <F1 f1Active={f1Active} activateF1={activateF1} />
      </Section>

      <Section>
        <H2>Default home</H2>

        <Form.Select
          value={defaultHome}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDefaultHome(e.target.value as NavRoute)}
        >
          <option value={Route.Library.path}>{Route.Library.title}</option>
          {!disabledPages.includes(Route.Recent.path) && (
            <option value={Route.Recent.path}>{Route.Recent.title}</option>
          )}
          {!disabledPages.includes(Route.Upcoming.path) && (
            <option value={Route.Upcoming.path}>{Route.Upcoming.title}</option>
          )}
          {!disabledPages.includes(Route.Trending.path) && (
            <option value={Route.Trending.path}>{Route.Trending.title}</option>
          )}
        </Form.Select>
      </Section>

      <Section>
        <H2>Enabled pages</H2>

        <Form.Checks
          items={[
            {
              value: Route.Recent.path,
              label: Route.Recent.title,
              checked: !disabledPages.includes(Route.Recent.path),
            },
            {
              value: Route.Upcoming.path,
              label: Route.Upcoming.title,
              checked: !disabledPages.includes(Route.Upcoming.path),
            },
            {
              value: Route.Trending.path,
              label: Route.Trending.title,
              checked: !disabledPages.includes(Route.Trending.path),
            },
          ]}
          onChange={(item) => {
            if (item.checked === false) {
              setDisabledPages([
                ...new Set([...disabledPages, item.value as OptionalRoute]),
              ]);
            } else if (item.checked === true) {
              setDisabledPages(disabledPages.filter((p) => p !== item.value));
            }
          }}
        />
      </Section>

      <Section>
        <Source />
      </Section>
    </>
  );
}
