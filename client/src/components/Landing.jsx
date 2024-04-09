import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-router-dom";
import { URLs } from "../constants";
import Proptypes from "prop-types";

Landing.propTypes = {
  onSignIn: Proptypes.func.isRequired,
};

function Landing({ onSignIn }) {
  return (
    <div className="h-screen flex flex-col md:flex-row md:items-center ">
      <div className="flex justify-center md:w-1/2">
        <Logo />
      </div>

      <section className=" md:mb-40 p-5">
        <div className="px-7 mt-56 ">
          <div className="text-stone-50 text-4xl font-bold font-inter ">
            Happening Now
          </div>
          <div className="text-stone-50 text-2xl font-bold font-inter">
            Join today.
          </div>
        </div>

        <div className="mt-10">
          <Link to={URLs.signUpStep1}>
            <Button variants="default" disabled={false}>
              Create account
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-1 p-5">
          <div className="h-[1px] w-36 bg-neutral-700"></div>
          <span className="text-neutral-50 text-base font-normal font-chirp">
            or
          </span>
          <div className="h-[1px] w-36 bg-neutral-700"></div>
        </div>

        <p className="text-base font-medium text-neutral-50 font-inter ml-5">
          Already have an account?
        </p>

        <Button variants="outline" type="primary" onClick={onSignIn}>
          Sign In
        </Button>
      </section>
    </div>
  );
}

export default Landing;
