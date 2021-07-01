import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "@material-ui/core";
import theme, { buildGlobalStyles } from "../../src/theme";

interface IProps {
  children: JSX.Element;
}

const TopLayout: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={buildGlobalStyles(theme)} />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default TopLayout;
