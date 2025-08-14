import { styled } from "styled-components";
import { Color, linkCss } from "../global.tsx";
import { H2 } from "../shared/elements.tsx";

const A = styled.a`
  ${linkCss};
`;

type Props = {
  f1Active: boolean;
  activateF1: (active: boolean) => void;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
  gap: 4px;
`;

const ToggleWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${Color.BgSecondary};
  border-radius: 12px;
  padding: 3px;
  cursor: pointer;
`;

const Toggle = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  margin: auto;
  width: 18px;
  height: 18px;
  background-color: ${({ active }) => active ? Color.Accent : "white"};
  border-radius: 50%;
  border: solid white 2px;
  transition: transform 0.2s ease-in-out, background-color 0.3s ease-in-out;
  transform: ${({ active }) =>
    active ? "translateX(calc(100% + 6px))" : "translateX(0)"};
`;

const PoweredBy = styled.div`
  margin: 12px 0 64px 0;
  font-size: 0.8rem;
`;

export function F1({ f1Active, activateF1 }: Props) {
  return (
    <>
      <H2>F1</H2>
      <Wrapper>
        <div>Activate F1 calendar:</div>
        <div>
          <ToggleWrapper onClick={() => activateF1(!f1Active)}>
            <Toggle active={f1Active} />
          </ToggleWrapper>
        </div>
      </Wrapper>
      <PoweredBy>
        Powered by{" "}
        <A href="https://github.com/sportstimes/f1" target="_blank">
          github.com/sportstimes/f1
        </A>
      </PoweredBy>
    </>
  );
}
