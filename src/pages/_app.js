import { Roboto } from "@next/font/google";
import "@/styles/style.scss";
import store from "@/pages/store/index";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--roboto-font",
});

export default function App({ Component, pageProps }) {
  function getPageWrapperComponent() {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...pageProps} />);
    } else {
      return (
        <>
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
        </>
      );
    }
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {getPageWrapperComponent()}
      </QueryClientProvider>
    </Provider>
  );
}
