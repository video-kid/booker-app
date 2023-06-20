import { Dashboard } from "@/modules/Dashboard/Dashboard";
import { color, palette } from "@/styles/colors";
import { fontPrimary, fontSecondary } from "@/styles/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --white: #ffffff;
          --font-primary: ${fontPrimary.style.fontFamily};
          --font-secondary: ${fontSecondary.style.fontFamily};
          --background: ${color.background};
          --text: ${color.text};
          --success: ${color.severity.success};
          --information: ${color.severity.information};
          --danger: ${color.severity.error};
          --warning: ${color.severity.warning};
          --color-primary: ${color.primary};
          --background-sidebar: ${palette.grey["200"]};
        }
      `}</style>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>
    </>
  );
};

export default App;
