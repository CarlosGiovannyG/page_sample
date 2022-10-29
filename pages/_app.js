import { ModalProvider, SearchProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </SearchProvider>
  );
}

export default MyApp;
