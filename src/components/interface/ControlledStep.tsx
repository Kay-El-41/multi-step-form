import React, { PropsWithChildren } from "react";
import { stepNumber } from "../Form";
import { formType, formUpdateType } from "../../hooks/useFormDataCollect";

type ControlledStepProps = {
  data: formType;
  currentStep: stepNumber;
  handleChangeSteps: (newStep: stepNumber, updateData: formUpdateType) => void;
};

export const ControlledStep = ({
  children,
  currentStep,
  data,
  handleChangeSteps,
}: PropsWithChildren<ControlledStepProps>) => {
  const currentStepComponent = React.Children.toArray(children)[currentStep];

  const propsToPass = {
    data,
    handleChangeSteps,
  };

  if (React.isValidElement(currentStepComponent)) {
    return React.cloneElement(currentStepComponent, propsToPass);
  }

  return currentStepComponent;
};
