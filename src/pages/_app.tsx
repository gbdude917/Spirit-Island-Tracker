import { AppProps } from "next/app";
import PagesLayout from "../app/layout/PagesLayout"; // Import your layout component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PagesLayout>
      <Component {...pageProps} />
    </PagesLayout>
  );
}

export default MyApp;
