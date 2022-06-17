import React from "react";
import Image from "next/image";
import movie from "./images/scale.jpg";

type Props = {};

const movieRow = (props: Props) => {
  return (
    <div>
      <div className="relative flex items-center justify-center ">
        <Image className="relative" src={movie} alt="movie" />
      </div>
    </div>
  );
};

export default movieRow;
