import { stepNumber } from "./Form";

type FormStepsProps = {
  currentStep: stepNumber;
  handleChangeSteps: (newStep: stepNumber) => void;
};

const FORM_STEPS = [
  {
    stepNumber: 0,
    stepNumberShow: "1",
    stepMessage: "Sign Up",
  },
  {
    stepNumber: 1,
    stepNumberShow: "2",
    stepMessage: "Message",
  },
  {
    stepNumber: 2,
    stepNumberShow: "3",
    stepMessage: "Gender",
  },
];

export const FormSteps = ({
  currentStep,
  handleChangeSteps,
}: FormStepsProps) => {
  return (
    <div className="w-full flex justify-center gap-5 md:justify-around">
      {FORM_STEPS.map((step) => (
        <button
          key={step.stepNumber}
          aria-label={step.stepMessage}
          className="step-button"
          onClick={() => handleChangeSteps(step.stepNumber as stepNumber)}
          disabled={currentStep == step.stepNumber}
        >
          <span className="step-number-button">{step.stepNumberShow}</span>
          <span className="select-none">{step.stepMessage}</span>
        </button>
      ))}
    </div>
  );
};
