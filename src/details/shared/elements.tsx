import { styled } from "styled-components";

export const Background = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0.2;
`;

export const Foreground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const Tagline = styled.div`
  font-size: 1.4rem;
  text-wrap: balance;
`;

export const ReleaseYear = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
`;

export const Genre = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 4px 6px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  margin: 4px 4px 4px 0;
`;

export const P = styled.p`
  margin: 12px 0 12px 0;
  padding: 0;
  text-wrap: balance;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 4px;
  margin-bottom: 24px;
`;
