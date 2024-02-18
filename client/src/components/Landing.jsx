import React from "react";
import Logo from "./Logo";
import Button from "./Button";

function Landing() {
  return (
    <div className=" h-screen  p-5 ">
      <div className="flex justify-center">
        <Logo />
      </div>

      <section>
        <div class=" flex flex-col px-7 mt-56 ">
          <p class=" text-stone-50 text-4xl font-bold font-inter ">
            Happening Now
          </p>
          <div class="text-stone-50 text-2xl font-bold font-inter">
            Join today.
          </div>
        </div>
        <div className=" mt-10">
          <Button variants="default" disabled={true}>
            Create Account
          </Button>
        </div>
      </section>

      <section>
        <div class="flex items-center gap-1 p-5">
          <div class="h-[1px] w-36 bg-neutral-700"></div>
          <span class="text-neutral-50 text-base font-normal font-chirp">
            or
          </span>
          <div class="h-[1px] w-36 bg-neutral-700"></div>
        </div>
        <p class="text-base font-medium text-neutral-50 font-inter ml-5">
          Already have an account?
        </p>

        <Button variants="outline" type="primary">Sign up</Button>
      </section>
    </div>
  );
}

export default Landing;
