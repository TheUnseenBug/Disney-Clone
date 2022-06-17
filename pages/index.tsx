import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MovieRow from "../Components/movieRow";
import movie from "../Components/images/scale.jpg";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="relative flex items-center justify-center ">
          <Image className="relative" src={movie} alt="movie" />
        </div>
      </div>
    </>
  );
};

export default Home;
