import React from "react";
import Image from "next/image";
import movie from "./images/scale.jpg";

type Props = {};

const movieRow = (props: Props) => {
  return (
    <div>
      <h1 className="text-gray-500 ">Recommended for you</h1>
      <div className="relative flex items-center justify-center my-3 ">
        <a href="/Movies/Shang-Chi">
          <Image
            className="relative rounded-lg shadow-xl "
            src={movie}
            alt="movie"
          />
        </a>
        <a href="/Movies/abc">
          <Image
            className="relative rounded-lg cursor-pointer"
            src={movie}
            alt="movie"
          />
        </a>
        <a href="/Movies/abc">
          <Image
            className="relative rounded-lg cursor-pointer"
            src={movie}
            alt="movie"
          />
        </a>
        <a href="/Movies/abc">
          <Image
            className="relative rounded-lg cursor-pointer"
            src={movie}
            alt="movie"
          />
        </a>
        <a href="/Movies/abc">
          <Image
            className="relative rounded-lg cursor-pointer"
            src={movie}
            alt="movie"
          />
        </a>
      </div>
    </div>
  );
};

export default movieRow;
