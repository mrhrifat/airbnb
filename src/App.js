import { ThemeProvider } from "@mui/material";
import Root from "./Root";
import { theme } from "./themes/customTheme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
