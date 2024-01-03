# Multi-Step-Form

The multi-step-form is created using controlled flows components and custom hook React design patterns.

![Multi-Step-Form](/public/form.png?raw=true "Title")

Created using vite+React+TypeScript. Use 'npm run dev' to start the local development server.

The controlled flow design pattern results in the simple and efficient clean code with only one parent controlling all the steps.

The custom hook design pattern enables the developer to work separately on the logic and the user interface.

The example of React custom hook design:

```JSX
export const useHook = () => {
  const [data, setData] = useState();

  const handleChangeData = (newData) => {
    setData(newData);
  };

  return { data, handleChangeData };
};

export const App = () => {
  // Accessing the data from custom hook
  const { data, handleChangeData } = useHook();
  // ... codes
};
```

The example of React controlled flow design pattern:

```JSX
export const ControlledSteps = ({ children, setCurrentStep }) => {
  const currentStepComponent = React.Children.toArray(children)[currentStep];

  const goNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Check if the current component is a element, and return it with the other props we want to pass to the child
  if (React.isValidElement(currentStepComponent)) {
    return React.cloneElement(currentStepComponent, goNextStep);
  }

  return currentStepComponent;
};
```

Usage of the controlled flow:

```JSX
export const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  //Based on the current step of 0, only the step1 component is shown in the browser.

  return (
    <ControlledSteps setCurrentStep={setCurrentStep}>
      <Step1Component />
      <Step2Component />
    </ControlledSteps>
  );
};
```
