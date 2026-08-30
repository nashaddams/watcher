import { useMemo, useState } from "react";
import { styled } from "styled-components";
import { Color } from "../global.tsx";
import { H2 } from "../shared/elements.tsx";
import { Form } from "./form.tsx";

const Code = styled.code`
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
  background-color: ${Color.BgSecondary};
  padding: 12px;
  border-radius: 6px;
  word-break: break-all;
`;

const RestoreDescription = styled.div`
  margin-top: 12px;
`;

type Props = {
  showIds: number[];
  movieIds: number[];
  restoreShowsAndMovies: (args: { shows: number[]; movies: number[] }) => void;
};

export function BackupRestore(
  { showIds, movieIds, restoreShowsAndMovies }: Props,
) {
  const [restoreInput, setRestoreInput] = useState<string>("");

  const backupObj = useMemo(() =>
    JSON.stringify({
      created: new Date().toISOString(),
      shows: showIds,
      movies: movieIds,
    }), [showIds.length, movieIds.length]);

  return (
    <>
      <H2>Backup & Restore</H2>
      <div>1. Copy and store the following text:</div>
      <Form.Wrapper>
        <Code>
          {backupObj}
        </Code>
        <Form.CopyButton
          onClick={() => navigator.clipboard.writeText(backupObj)}
          style={{ alignSelf: "start" }}
        />
      </Form.Wrapper>

      <RestoreDescription>
        2. Paste and save the previously exported text:
      </RestoreDescription>
      <Form.Wrapper>
        <Form.Input
          type="text"
          name="restore-input"
          value={restoreInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRestoreInput(e.target.value)}
        />
        <Form.SaveButton
          onClick={() => {
            const input = restoreInput.trim();

            if (input !== "") {
              try {
                const { shows, movies } = JSON.parse(input);

                if (
                  !Array.isArray(shows) || !Array.isArray(movies) ||
                  !shows.every((item) => typeof item === "number") ||
                  !movies.every((item) => typeof item === "number")
                ) {
                  throw new Error("Invalid shows/movies format");
                }

                restoreShowsAndMovies({ shows, movies });
              } catch (err) {
                console.warn("Invalid restore input.", err);
                setRestoreInput("");
              }
            }
          }}
        />
      </Form.Wrapper>
    </>
  );
}
