import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import StepHeading from "../../components/StepHeading";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import { MONTHS } from "../../components/DatePicker";
import { URLs } from "../../constants";
import { Link } from "react-router-dom";

function LoginStep2() {
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  const DOB = `${formValues.day} ${MONTHS[formValues.month]} ${
    formValues.year
  }`;

  return (
    <div className="">
      <section className="flex flex-col items-start self-stretch gap-2 p-5 ">
        <div>
          <StepHeading>Create your account</StepHeading>
          <Fieldset text="Name" value={formValues.name} type="text" />
          <Fieldset text="Email" value={formValues.email} type="email" />
          <Fieldset text="Date of Birth" value={DOB} type="text" />
        </div>

        <Link to={URLs.signUpStep3} className=" mt-10 pt-5">
          <Button variants="solid"   disabled={false}>
            Sign up
          </Button>
        </Link>
      </section>
    </div>
  );
}

export default LoginStep2;
