import { FormEvent } from "react";
import { StepProps } from "./StepOne";

export const StepTwo = ({ data, handleChangeSteps }: StepProps) => {
  const handleSubmit = (event: FormEvent) => {
    handleChangeSteps(2, event);
  };
  return (
    <div className="flex flex-col">
      <p className="text-sm opacity-60">Step 2/3</p>
      <h2 className="font-batman text-lg mt-1 mb-4">Message</h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="step-form-label" htmlFor="email">
            Tell me why are you applying to become a robin?
          </label>
          <textarea
            className="step-one-input resize-none"
            id="address"
            minLength={500}
            maxLength={1000}
            name="message"
            rows={10}
            placeholder="Your reasons must be at least 500 characters long."
            required
            defaultValue={data?.message}
          />
        </div>

        <div className="flex w-full justify-between">
          <button
            type="button"
            className="step-form-button bg-primary"
            aria-label="Go back one step"
            onClick={() => handleChangeSteps(0)}
          >
            Previous
          </button>
          <button
            type="submit"
            className="step-form-button bg-primary"
            aria-label="Move to next step"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
