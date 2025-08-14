import { createGlobalStyle, css } from "styled-components";

export const Color = {
  Bg: "#0a1929",
  BgSecondary: "#192533",
  Text: "white",
  Accent: "#ffab00",
};

export const GlobalStyle = createGlobalStyle`
  * {
    font-family:
      -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
      Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-optical-sizing: auto;
  }

  *::selection {
    background-color: ${Color.Accent};
  }

  body {
    background-color: ${Color.Bg};
    color: ${Color.Text};
    padding: 0;
    margin: 0;
  }
`;

export const linkCss = css`
  display: inline-block;
  color: ${Color.Accent};
  font-style: normal;
  text-decoration: none;
  cursor: pointer;
`;

export const theme = {};
