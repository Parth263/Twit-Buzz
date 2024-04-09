import React from "react";
import Icon from "/src/assets/TwitBuzz-logo.jpg";

function Logo() {
  return (
    <div className=" w-36 md:w-72 flex justify-center mt-4 ">
      <img src={Icon} alt="company logo" />
    </div>
  );
}

export default Logo;
