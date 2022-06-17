import React from "react";

const navItem = (props: string) => {
  return (
    <>
      <div className="flex items-center ">
        <a className="flex flex-row justify-start gap-3 " href="/Home">
          {props.icon}
          <p>{props.text}</p>
        </a>
      </div>
    </>
  );
};

export default navItem;
