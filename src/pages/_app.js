import { Roboto } from "@next/font/google";
import "@/styles/style.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--roboto-font",
});

// If loading a variable font, you don't need to specify the font weight
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
