import { Dashboard } from '@/modules/Dashboard/Dashboard';
import { color, palette } from '@/styles/colors';
import { fontPrimary, fontSecondary } from '@/styles/fonts';
import { typography } from '@/styles/typography';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { secrets } from '../../creds';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ModalProvider from '@/context/modalContext';

const client = new ApolloClient({
  headers: {
    'x-hasura-admin-secret': `${secrets.db.admin}`,
  },
  uri: 'https://composed-stingray-81.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style
        jsx
        global>{`
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
          --background-sidebar: ${palette.grey['200']};
          --background-table-header: ${color.tableHeader};
          --background-table-row-dark: ${palette.grey['200']};
          --tab: ${color.tab};
          --h1: ${typography.heading.primary};
          --h2: ${typography.heading.primary};
          --h3: ${typography.heading.primary};
          --h5: ${typography.heading.primary};
        }
        body {
          overflow: hidden;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <ApolloProvider client={client}>
        <ModalProvider>
          <Dashboard>
            <Component {...pageProps} />
          </Dashboard>
        </ModalProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
