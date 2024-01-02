import { useState } from "react";
import { FormSteps } from "./FormSteps";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { ControlledStep } from "./interface/ControlledStep";

export type stepNumber = 0 | 1 | 2;

export const Form = () => {
  const [data, setData] = useState({});
  const [currentStep, setCurrentStep] = useState<stepNumber>(0);

  const handleChangeSteps = (newStep: stepNumber) => {
    setCurrentStep(newStep);
  };

  return (
    <div className="container flex flex-col justify-center gap-3 px-4 py-6">
      <h1 className="text-center text-xl md:text-3xl font-batman md:my-5 text-primary">
        The Legacy of Batman
      </h1>
      <FormSteps
        currentStep={currentStep}
        handleChangeSteps={handleChangeSteps}
      />
      <hr className="my-2" />
      <ControlledStep currentStep={currentStep}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledStep>
    </div>
  );
};
