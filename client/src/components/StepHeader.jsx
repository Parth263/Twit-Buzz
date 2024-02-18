import React from "react";
import Cancel from "../assets/cancel.svg";

function StepHeader({ step }) {
  return (
    <div className=" flex items-center gap-5 self-stretch py-3">
      <img src={Cancel} alt="cancel button" />
      <p className="text-0.9rem font-bold leading-normal text-neutral-50">
        Step {step} of 4
      </p>
    </div>
  );
}

export default StepHeader;
