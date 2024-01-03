import { stepNumber } from "./Form";

type FormStepsProps = {
  currentStep: stepNumber;
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

export const FormSteps = ({ currentStep }: FormStepsProps) => {
  return (
    <div className="w-full  flex justify-center gap-5 md:justify-around">
      {currentStep < 3 ? (
        FORM_STEPS.map((step) => (
          <div
            key={step.stepNumber}
            aria-label={step.stepMessage}
            className="step-div"
          >
            {currentStep === step.stepNumber && (
              <div className="step-div-active" />
            )}
            <span className="step-number">{step.stepNumberShow}</span>
            <span className="select-none">{step.stepMessage}</span>
          </div>
        ))
      ) : (
        <div
          aria-label="finished"
          className="py-2 md:py-1 px-5 text-white bg-primary"
        >
          <span className="font-batman text-center ">Recorded</span>
        </div>
      )}
    </div>
  );
};
