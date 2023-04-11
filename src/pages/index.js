import Header from "@/components/Banner";
import Categories from "@/components/Categories";
import NewsLetter from "@/components/NewsLetter";
import PopularProducts from "@/components/PopularProducts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>shop online</title>
      </Head>
      <div className="bg-rose-5">
        <Header />
        <Categories />
        <PopularProducts />
        <NewsLetter />
      </div>
    </>
  );
}
