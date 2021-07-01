import { ThemeOptions, createTheme } from "@material-ui/core/styles";
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------
const isLight = true;
const themeOptions: ThemeOptions = {
  palette: isLight
    ? { ...palette.light, mode: "light" }
    : { ...palette.dark, mode: "dark" },
  typography,
  shape,
  breakpoints,
  direction: "ltr",
  shadows: isLight ? shadows.light : shadows.dark,
  customShadows: isLight ? customShadows.light : customShadows.dark,
};

const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);

export default theme;
export { default as buildGlobalStyles } from "./globalStyles";
