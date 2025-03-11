import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { RouterMain } from "./routes/route.tsx";
import { GlobalReset } from "./styles/GlobalReset.ts";
import { GlobalStyle } from "./styles/GlobalStyle.ts";

function App() {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <ThemeProvider>
        <RouterMain />
      </ThemeProvider>
    </>
  );
}

export default App;
