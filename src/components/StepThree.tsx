import { FormEvent } from "react";
import { StepProps } from "./StepOne";

export const StepThree = ({ data, handleChangeSteps }: StepProps) => {
  const handleSubmit = (event: FormEvent) => {
    handleChangeSteps(3, event);
  };

  return (
    <div className="flex flex-col">
      <p className="text-sm opacity-60">Step 3/3</p>
      <h2 className="font-batman text-lg mt-1 mb-4">Gender</h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <h3 className="step-form-label">Identify Yourself</h3>

          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="accent-primary"
                required
                defaultChecked={data?.gender === "male"}
              />
              <span> I'm a Male</span>
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className="accent-primary"
                required
                defaultChecked={data?.gender === "female"}
              />
              <span> I'm a Female</span>
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                id="lgbt"
                value="lgbt"
                className="accent-primary"
                required
                defaultChecked={data?.gender === "lgbt"}
              />
              <span> I'm a LGBTQ+</span>
            </label>
          </div>
        </div>

        <label className="flex gap-1 items-start mb-4">
          <input
            type="checkbox"
            name="pledge"
            id="pledge"
            className="accent-primary translate-y-1/2"
            required
            defaultChecked={data?.pledge === "on" ? true : false}
          />
          <span className="tracking-wide">
            I swear on my life that once I became a robin, I will cherish and
            protect my family as well the city of Gotham even at the cost of my
            life.
          </span>
        </label>
        <div className="flex w-full justify-between">
          <button
            type="button"
            className="step-form-button bg-primary"
            aria-label="Go back one step"
            onClick={() => handleChangeSteps(1)}
          >
            Previous
          </button>
          <button
            type="submit"
            className="step-form-button bg-primary"
            aria-label="Move to next step"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};
