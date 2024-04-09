import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import StepHeading from "../../components/StepHeading";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import { URLs } from "../../constants";
import { Link } from "react-router-dom";

function LoginStep3() {
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  console.log(userData);
  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl p-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>We sent you the code</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Enter below to verify {formValues.email}
          </p>
          <Fieldset required text="verification code" type="text" />
          <p className="flex justify-end text-sm font-normal leading-normal text-twitter-default">
            Didn’t receive a code?
          </p>
        </div>
      </section>

      <Link
        to={URLs.signUpStep4}
        className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform"
      >
        <Button variant="default" disabled={false}>
          Next
        </Button>
      </Link>
    </>
  );
}

export default LoginStep3;
