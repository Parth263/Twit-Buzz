import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import StepHeading from "../../components/StepHeading";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import { MONTHS } from "../../components/DatePicker";

function LoginStep2() {
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  const DOB = `${formValues.day} ${MONTHS[formValues.month]} ${
    formValues.year
  }`;

  return (
    <div>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem p-5">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <StepHeading>Create your account</StepHeading>
          <Fieldset text="Name" value={formValues.name} type="text" />
          <Fieldset text="Email" value={formValues.email} type="Email" />
          <Fieldset text="Date of Birth" value={DOB} type="text" />
        </div>
      </section>

      <div className="mt-10 p-5">
        <Button variants="solid" size="full" disabled={false}>
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default LoginStep2;
