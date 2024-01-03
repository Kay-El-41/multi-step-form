import { formType } from "../hooks/useFormDataCollect";

export const FinalStep = ({ data }: { data: formType }) => {
  console.log("Your robin entrance data", data);

  return (
    <div className="flex flex-col h-full">
      <div className="h-full grow">
        <p className="block w-[20em] md:w-2/3 mx-auto tracking-wide text-center mb-2">
          Your Request has been recorded in the super bat database. Batman will
          contact you soon if you are qualified to become a robin.
        </p>

        <p className="block w-[20em] mx-auto text-sm tracking-wide text-center mt-5">
          You can now close the tab.
          <br />
          Thank you for choosing batman.
        </p>
      </div>
    </div>
  );
};
