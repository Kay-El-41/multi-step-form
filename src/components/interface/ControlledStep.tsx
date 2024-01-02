import React, { PropsWithChildren } from "react";

type ControlledStepProps = {
  currentStep: 0 | 1 | 2;
};

export const ControlledStep = ({
  children,
  currentStep,
}: PropsWithChildren<ControlledStepProps>) => {
  const currentStepComponent = React.Children.toArray(children)[currentStep];
  return currentStepComponent;
};
