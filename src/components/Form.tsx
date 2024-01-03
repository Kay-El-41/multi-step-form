import { useState } from "react";
import { FormSteps } from "./FormSteps";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { ControlledStep } from "./interface/ControlledStep";
import { FinalStep } from "./FinalStep";
import { useFormDataCollect } from "../hooks/useFormDataCollect";

export type stepNumber = 0 | 1 | 2 | 3;

export const Form = () => {
  const { data, currentStep, handleChangeSteps } = useFormDataCollect();

  return (
    <section className="container md:w-3/4 flex flex-col justify-center gap-3 px-4 py-6">
      <h1 className="text-center text-xl md:text-3xl font-batman md:mt-5 text-primary">
        The Legacy of Batman
      </h1>
      <p className="text-center -mt-3 md:-mt-2">Apply to become a robin.</p>
      <hr className="my-2" />
      <FormSteps
        currentStep={currentStep}
        handleChangeSteps={handleChangeSteps}
      />
      <hr className="my-2" />
      <section className="md:h-[50vh]">
        <ControlledStep
          data={data}
          currentStep={currentStep}
          handleChangeSteps={handleChangeSteps}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
          <FinalStep />
        </ControlledStep>
      </section>
    </section>
  );
};
