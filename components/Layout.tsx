import * as React from 'react';
import { createGlobalStyle } from '../styles/styled-components';
import { ThemeProvider } from '../styles/styled-components';
import { theme } from '../styles/theme';
import { Header } from './Header';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');
  body {
    margin: 0px;
    padding: 0px;
    background-color: ${(props: any) => props.theme.darkGrey};
    font-family: 'Open Sans Condensed';
    font-size: 10px;
    text-shadow: 0px 16px 24px rgba(0,0,0,0.1);
  }
`;

export const Layout = (props: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      {props.children}
      <GlobalStyle />
    </div>
  </ThemeProvider>
);
