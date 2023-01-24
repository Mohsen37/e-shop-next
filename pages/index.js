import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCTS_QUERY } from "../lib/query";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";
import Navbar from "../components/Navbar";

export default function Home() {
  const [result] = useQuery({ query: PRODUCTS_QUERY });
  const { fetching, data, error } = result;

  if (fetching) {
    return <h1></h1>;
  }
  if (error) {
    return <h1>Error : {error.message}</h1>;
  }
  const products = data.products.data;
  return (
    <div>
      <Head>
        <title>Sigma Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main--page">
        <Gallery>
          {products.map((item) => {
            return <Product key={item.id} product={item} />;
          })}
        </Gallery>
      </main>
    </div>
  );
}
