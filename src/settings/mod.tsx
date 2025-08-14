import { styled } from "styled-components";
import { H1 } from "../shared/elements.tsx";
import { ApiKey } from "./api-key.tsx";
import { BackupRestore } from "./backup-restore.tsx";
import { F1 } from "./f1.tsx";

const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

type Props = {
  addApiKey: (apiKey: string) => void;
  showIds: number[];
  movieIds: number[];
  restoreShowsAndMovies: (args: { shows: number[]; movies: number[] }) => void;
  f1Active: boolean;
  activateF1: (active: boolean) => void;
};

export function Settings(
  { addApiKey, showIds, movieIds, restoreShowsAndMovies, f1Active, activateF1 }:
    Props,
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
    </>
  );
}
