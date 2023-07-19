import { useBookingContext } from "../BookingContext";
//import { useEffect } from 'react';

export default function CustomerDetails() {
  const { customerData, setCustomerData } = useBookingContext();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
    
  };

  // useEffect(() => {
  //   console.log(customerData);
  // }, [customerData]);

  return (
    <div className="flex flex-col ">
      <p className="text-red-500 font-bold"> * fields are mandatory</p>
      
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          First Name <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={customerData["firstName"] || ""}
            name="firstName"
            placeholder="First Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      
    </div>
  );
}
