import { ThemeProvider } from "@mui/material";
import Root from "./Root";
import { theme } from "./themes/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
