import Theme from "../components/theme";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
