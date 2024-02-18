import React from "react";
import PropTypes from "prop-types"; // ES6

StepHeading.PropTypes = {
  children: PropTypes.node,
};

function StepHeading({ children }) {
  return (
    <div>
      <h1 className="text-2xl font-bold leading-normal text-neutral-50">{children}</h1>
    </div>
  );
}

export default StepHeading;
