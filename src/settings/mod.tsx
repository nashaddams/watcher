import type * as React from "react";
import { styled } from "styled-components";
import { Color } from "../global.tsx";
import { H1, H2 } from "../shared/elements.tsx";
import { Path, type PathType } from "../shared/path.ts";
import { ApiKey } from "./api-key.tsx";
import { BackupRestore } from "./backup-restore.tsx";
import { F1 } from "./f1.tsx";
import { Source } from "./source.tsx";

const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 96px;
  }
`;

const Select = styled.select`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 6px;
  border-right: 8px solid transparent;
  padding: 12px 14px;
  color: white;
  background-color: ${Color.BgSecondary};
  font-size: 1rem;
  cursor: pointer;
  width: 210px;
  /* Light arrow color */
  color-scheme: dark;
`;

type Props = {
  addApiKey: (apiKey: string) => void;
  showIds: number[];
  movieIds: number[];
  restoreShowsAndMovies: (args: { shows: number[]; movies: number[] }) => void;
  f1Active: boolean;
  activateF1: (active: boolean) => void;
  defaultHome: PathType;
  setDefaultHome: (path: PathType) => void;
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
  }: Props,
) {
  return (
    <>
      <H1>Settings</H1>

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

        <Select
          value={defaultHome}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDefaultHome(e.target.value as PathType)}
        >
          <option value={Path.Library}>Library</option>
          <option value={Path.Recent}>Recent</option>
          <option value={Path.Upcoming}>Upcoming</option>
          <option value={Path.Trending}>Trending</option>
        </Select>
      </Section>

      <Section>
        <Source />
      </Section>
    </>
  );
}
