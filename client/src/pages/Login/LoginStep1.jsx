import React, { useContext, useState } from "react";
import Fieldset from "../../components/Fieldset";
import DatePicker from "../../components/DatePicker";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";

function LoginStep1() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(UserContext);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    day: 1,
    month: 0,
    year: 2023,
  });

  const handleInputChange = (field, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFormData({ ...formData, ...inputValues });
        navigate(URLs.signUpStep2);
      }}
      className="flex flex-col items-start gap-2 self-stretch p-5"
    >
      <StepHeading>Create your account</StepHeading>

      <Fieldset
        required
        text="Name"
        type="text"
        minLength={2}
        inputValue={inputValues.name}
        onInputChange={(value) => handleInputChange("name", value)}
      />

      <Fieldset
        text="Email"
        type="email"
        minLength={2}
        inputValue={inputValues.email}
        onInputChange={(value) => handleInputChange("Email", value)}
      />

      <div className="flex flex-col items-start gap-2 self-stretch mt-10">
        <h3 className="text-0.9rem font-bold leading-normal text-neutral-50">
          Date of birth
        </h3>
        <p className="text-sm font-normal leading-normal text-secondary text-neutral-500">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </p>
      </div>
      <DatePicker handleInputChange={handleInputChange} />
      <div className=" fixed bottom-14 md:w-full ">
        <Button variants="default">Create your account</Button>
      </div>

    </form>
  );
}

export default LoginStep1;
