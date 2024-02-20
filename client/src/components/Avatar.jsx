import React from "react";
import ProfileAvatar from "/src/assets/Profile-Avatar.jpg";

function Avatar() {
  return (
    <>
      <img
        src={ProfileAvatar}
        alt="Profile Avatar"
        className= "sticky w-12 rounded-full ml-5 mt-3 border-2 border-stone-300"
      />
    </>
  );
}

export default Avatar;
