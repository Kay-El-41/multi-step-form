import { FormEvent, useState } from "react";
import { stepNumber } from "../components/Form";

export type formType = {
  name: string;
  email: string;
  age: string;
  address: string;
  message: string;
  gender: "male" | "female" | "lgbt";
  pledge: "on" | "off";
};

export type formUpdateType = Partial<formType>;

export const useFormDataCollect = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    message: "",
    gender: "",
    pledge: "off",
  });
  const [currentStep, setCurrentStep] = useState<stepNumber>(0);

  const handleChangeSteps = (newStep: stepNumber, event?: FormEvent) => {
    if (event) {
      event.preventDefault();
      const $form = event.currentTarget;
      const updateData = Object.fromEntries(
        new FormData($form as HTMLFormElement).entries()
      );
      setData({ ...data, ...updateData });
    }
    setCurrentStep(newStep);
  };

  return {
    data,
    currentStep,
    handleChangeSteps,
  };
};
