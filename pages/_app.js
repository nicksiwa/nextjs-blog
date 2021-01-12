import Theme from "../components/theme";
import "normalize.css"
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
