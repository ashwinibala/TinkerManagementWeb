import React from 'react'; 
import { useStepperContext } from "./StepperContext";


export default function StepperControl({ handleClick, currentStep, steps }) {
  const { userData } = useStepperContext();

  const handleBackClick = () => {
   
    handleClick('Back', userData);
  };

  const handleNextClick = () => {
    const direction = currentStep === steps.length - 1 ? 'Confirm' : 'Next';
  
    handleClick(direction, userData);
  };

    return (
      <div className="container mt-4 mb-8 flex justify-around">
        <button
          onClick={handleBackClick}
          className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
         
        </button>
  
        <button
          onClick={handleNextClick}
          className="cursor-pointer rounded-lg bg-blue-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
          
        </button>
      </div>
    );
  }
  