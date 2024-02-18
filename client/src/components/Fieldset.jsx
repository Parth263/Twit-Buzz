import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6

Fieldset.PropTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
  inputvalue: PropTypes.string,
  onInputChange: PropTypes.func,
  error: PropTypes.string,
};

function Fieldset({ text, type, inputvalue, onInputChange, error, ...rest }) {
  // const [showPassword, setShowPassword] = useState(false);

  // togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <fieldset
      className={`group mt-10 flex items-center self-stretch rounded border border-solid ${
        error ? "border-error" : "border-neutral-500"
      } px-3 py-4 pt-2 focus-within:border-twitter-default`}
    >
      <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
        <div className="px-2">{text}</div>
      </legend>

      <input
        type={type}
        placeholder={text}
        value={inputvalue}
        onChange={(e) => onInputChange(e.target.value)}
        className={`w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none
       ${error ? "border-error" : ""}`}
        {...rest}
      />
      {error && (
        <div className="mt-1 text-sm whitespace-nowrap text-error">{error}</div> // Display error message
      )}
    </fieldset>
  );
}

export default Fieldset;
