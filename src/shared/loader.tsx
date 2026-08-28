import { keyframes, styled } from "styled-components";

const loader = keyframes`
  0% {  transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Wrapper = styled.div<{ stroke: number; speed: number }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ stroke }) => stroke}px;
  border-radius: ${({ stroke }) => stroke / 2}px;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: ${({ stroke }) => stroke / 2}px;
    animation: ${loader} ${({ speed }) => speed}s ease-in-out infinite;
    transform: translateX(-95%);
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease;
  }
`;

export function Loader() {
  return <Wrapper stroke={2} speed={1.2} />;
}
