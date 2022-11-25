import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) return prev;

      return prev + 1;
    });
  };

  const previousStep = () => {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;

      return prev - 1;
    });
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    nextStep,
    previousStep,
    goToStep,
  };
};
