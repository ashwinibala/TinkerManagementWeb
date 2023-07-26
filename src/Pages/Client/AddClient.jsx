import { useState, useEffect } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseStepperContextProvider } from "./StepperContext";
import clientValidation from "./clientValidation";
import apiService from "../../Services/apiService";


import Account from "./steps/Account";
import Details from "./steps/Details";
import Final from "./steps/Final";

function AddClient() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [clientError, setClientError] = useState({});
  const [isNext, setIsNext] = useState(0);
  const [clientDetails, setClientDetails] = useState([]);
  const [status, setStatus] = useState("");
  
  const steps = [
    "Personal Details",
    "Account Information",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Details clientError = {clientError}/>;
      case 2:
        return <Account clientError = {clientError}/>;
      case 3:
        return <Final status = {status}/>;
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

    

    if(newStep === 1 || newStep === 0 || newStep === 2) {
      console.log(clientError.length);

      if(newStep === 2 && Object.keys(clientError).length === 0){
        (async () => {
          try {
            const Result = await apiService(clientDetails).catch((error) => {
              console.log(error); // Handle any errors
            });
        
            console.log(Result);
        
            if (Result && Result.responseCode === 200) {
             setStatus("Success");
            } else {
             setStatus("Failure");
            }
          } catch (error) {
            console.log(error);
          }
        })();
      }

    if(Object.keys(clientError).length === 0)
    {
      newStep++;
    }
    }

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
    <div className=" justify-center">
    
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
      
    </div>
    </UseStepperContextProvider>
  );
}

export default AddClient;

