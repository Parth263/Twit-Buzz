import React from "react";
import PropTypes from "prop-types";
import HomeActive from "/src/assets/home-active.svg";
import HomeInactive from "/src/assets/home-inactive.svg";
import ProfileActive from "/src/assets/profile-active.svg";
import ProfileInactive from "/src/assets/profile-inactive.svg";

Footer.PropTypes = {
  page: PropTypes.oneOf(["home", "Profile"]).isRequired,
};

function Footer({ page }) {
  return (
    <>
      <footer className=" bottom-0 flex w-full items-center justify-center gap-10 border-t border-neutral-800 bg-neutral-1000 px-6 py-1.1rem">
        <img
          src={page === "home" ? HomeActive : HomeInactive}
          alt="home-button"
        />
        <img
          src={page === "home" ? ProfileInactive : ProfileActive}
          alt="profile-button"
        />
      </footer>
    </>
  );
}

export default Footer;
