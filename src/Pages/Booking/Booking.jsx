
import { useState, useEffect } from "react";
import BookingStepper from "./BookingStepper";
import BookingControl from "./BookingControl";
import { UseBookingContextProvider } from "./BookingContext";
import ValidationOne from "./ValidationOne";


import CustomerDetails from "./steps/CustomerDetails";
import ServiceTime from "./steps/ServiceTime";
import TinkerList from "./steps/TinkerList";
import BookingFinal from "./steps/BookingFinal"

function Booking() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [isList, setIsList] = useState(0);
  const [bookingError, setBookingError] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  
  const steps = [
    "Service & Time",
    "Tinker Selection",
    "Details",
    "Complete"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <ServiceTime />;
      case 2:
        return <TinkerList bookingDetails = {bookingDetails}/>;
      case 3:
        return <CustomerDetails />;
      case 4:
        return <BookingFinal />;
      
      default:
    }
  };

  useEffect(() => {
    console.log(bookingDetails);
    let newStep = currentStep;

    if(newStep === 1 || newStep === 0 || newStep === 2 || newStep === 3) {
      console.log(bookingError.length);

    if(Object.keys(bookingError).length === 0)
    {
      newStep++;
    }
    }

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }, [isList]);

  


  const handleClick = (direction, customerData) => {

    setBookingDetails(customerData);
  
    if(direction === "Next" || direction === "Confirm")
    {
      setBookingError(ValidationOne(customerData,currentStep));
      setIsList(isList + 1);
    }
    else {
      setBookingError([]);
      let newStep = currentStep;
      newStep--;
      // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
 
  };

  

  return (
    <UseBookingContextProvider>
    <div className=" justify-center">
    
      <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <BookingStepper steps={steps} currentStep={currentStep} />

          
          <div className="my-10 p-10 ">
          
              {displayStep(currentStep)}
            
          
          </div>
        </div>
  
        {/* navigation button */}
        {currentStep !== steps.length && (
          <BookingControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}

       
      </div>
      
    </div>
    </UseBookingContextProvider>
  );
}

export default Booking;

