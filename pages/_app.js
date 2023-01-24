import "../styles/globals.css";
import {UserProvider} from '@auth0/nextjs-auth0/client'
import { Provider, createClient } from "urql";
import Navbar from "../components/Navbar";
import { StateContext } from "../lib/context";
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
