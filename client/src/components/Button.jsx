import React from "react";
import PropTypes from "prop-types"; // ES6

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "full", "md"]),
  variants: PropTypes.oneOf(["default", "outline", "solid"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  isdisabled: PropTypes.bool,
};

function Button({
  children = "Add your text",
  variants = "default",
  size = "md",
  type = "",
  isdisabled = false,
  ...rest
}) {
  const baseStyle = "rounded-full font-bold text-base text-center";

  const variantStyles = {
    default:
      "backdrop-blur-x m-5 flex h-9 w-80 items-center justify-center gap-2.5 bg-neutral-50 px-6 py-2 shadow-md",
    outline:
      "bg-black m-5 flex h-9 w-80 items-center justify-center gap-2.5 px-6 py-2 border-stroke border-solid border shadow-md backdrop-blur-xl",
    solid:
      "gap-2.5 px-6 py-4 hover:bg-twitter-hover bg-twitter-default text-neutral-50 text-2xl  disabled:bg-twitter-disabled disabled:cursor-not-allowed",
  };

  const buttonSize = {
    sm: "text-sm px-4 py-1.5 ",
    md: "",
    full: "p-5 w-full",
  };

  const textType = {
    primary: "text-twitter-default",
    secondary: "text-neutral-50",
  };

  const classes = [
    baseStyle,
    isdisabled,
    variantStyles[variants],
    textType[type],
    buttonSize[size],
  ].join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
