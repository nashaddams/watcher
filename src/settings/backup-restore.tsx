import { useState } from "react";
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

  const backupObj = JSON.stringify({
    shows: showIds,
    movies: movieIds,
  });

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
            if (restoreInput !== "") {
              try {
                restoreShowsAndMovies(JSON.parse(restoreInput));
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
