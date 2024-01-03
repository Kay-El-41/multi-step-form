import { FormEvent } from "react";
import { formUpdateType } from "../hooks/useFormDataCollect";
import { stepNumber } from "./Form";

export type StepProps = {
  data?: formUpdateType;
  handleChangeSteps: (newStep: stepNumber, event?: FormEvent) => void;
};

export const StepOne = ({ data, handleChangeSteps }: StepProps) => {
  const handleSubmit = (event: FormEvent) => {
    handleChangeSteps(1, event);
  };

  return (
    <div className="flex flex-col">
      <p className="text-sm opacity-60">Step 1/3</p>
      <h2 className="font-batman text-lg mt-1 mb-4">Sign Up</h2>

      <form className=" flex flex-col" onSubmit={handleSubmit}>
        <div className="md:flex gap-10">
          <div className="mb-4 md:w-1/2">
            <label className="step-form-label" htmlFor="name">
              Name
            </label>
            <input
              className="step-one-input"
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              defaultValue={data?.name}
            />
          </div>

          <div className="mb-4 md:w-1/2">
            <label className="step-form-label" htmlFor="email">
              Email
            </label>
            <input
              className="step-one-input"
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              defaultValue={data?.email}
            />
          </div>
        </div>

        <div className="mb-4 md:w-1/2 md:pr-5">
          <label className="step-form-label" htmlFor="email">
            Age
          </label>
          <input
            className="step-one-input"
            id="age"
            name="age"
            type="number"
            inputMode="numeric"
            max={80}
            min={10}
            placeholder="Your age"
            required
            defaultValue={data?.age}
          />
        </div>
        <div className="mb-4 md:w-1/2 md:pr-5">
          <label className="step-form-label" htmlFor="email">
            Address
          </label>
          <textarea
            className="step-one-input resize-none"
            id="address"
            name="address"
            maxLength={100}
            rows={4}
            placeholder="Your address"
            required
            defaultValue={data?.address}
          />
        </div>

        <button className="step-form-button self-end">Next</button>
      </form>
    </div>
  );
};
