import { useState, useEffect } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseStepperContextProvider } from "./StepperContext";
import clientValidation from "./clientValidation";

import Account from "./steps/Account";
import Details from "./steps/Details";
import Final from "./steps/Final";

function AddClient() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [clientError, setClientError] = useState([]);
  const [isNext, setIsNext] = useState(0);
  const [clientDetails, setClientDetails] = useState([]);
  
  const steps = [
    "Personal Details",
    "Account Information",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Details />;
      case 2:
        return <Account />;
        case 3:
          return <Final />;
      // case 3:
      //   return <Payment />;
        
      // case 4:
      //   return <Final />;
      default:
    }
  };

  

  useEffect(() => {
    console.log(clientDetails);

    let newStep = currentStep;
    console.log(clientError);
    if (clientError.length === 0){
      newStep++; }

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }, [isNext]);


  const handleClick = (direction, userData) => {

    setClientDetails(userData);
    //console.log(clientDetails);
    if(direction === "Next" || direction === "Confirm")
    {
      setClientError(clientValidation(userData,currentStep));
      setIsNext(isNext + 1);
    }
    else {
      setClientError([]);
      let newStep = currentStep;
      newStep--;
      // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
 
  };

  

  return (
    <UseStepperContextProvider>
    <div class="flex justify-center">
    <div class="w-1/5"></div>
      <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          
          <div className="my-10 p-10 ">
          
              {displayStep(currentStep)}
            
          
          </div>
        </div>
  
        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}

       
      </div>
      <div class="w-1/5 flex flex-col justify-center items-center">
          <div class="bg-pink-100">
            
                <ul>
                {clientError.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            
          </div>
      </div>
      </div>
    </UseStepperContextProvider>
  );
}

export default AddClient;

