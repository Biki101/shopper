import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPageCategories from "./components/categories/landing-page-categories";
import Dotw from "./components/deal-of-week/dofweek";
import LimitedOffer from "./components/limeted-oofer/limited-offer";
import NavBar from "./components/nav-bar/nav-bar";
import PopularServices from "./components/popular-services/popular-services";
import ShopBy from "./components/shop-by/shop-by";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="landing-page p-2 bg-gray-200">
        <NavBar />
        <LandingPageCategories />
        <Dotw />
        <PopularServices />
        <LimitedOffer />
        <ShopBy />
      </div>
    </div>
  );
}
