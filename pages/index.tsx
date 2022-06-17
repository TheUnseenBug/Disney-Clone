import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MovieRow from "../Components/movieRow";

const Home: NextPage = () => {
  return (
    <>
      <MovieRow />
    </>
  );
};

export default Home;
