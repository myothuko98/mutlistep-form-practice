import { useState } from "react";
import { useMultistepForm } from "./useMultustepForm";

function App() {
  const {
    steps,
    currentStepIndex,
    step,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([<div>One</div>, <div>Two</div>, <div>Three</div>]);
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={previousStep}>
              Back
            </button>
          )}
          {/* {!isLastStep && ( */}
          <button type="button" onClick={nextStep}>
            Next
          </button>
          {/* )} */}
        </div>
      </form>
    </div>
  );
}

export default App;
