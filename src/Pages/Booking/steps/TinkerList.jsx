import apiBooking from "../../../Services/apiBooking";
import React, { useState } from "react";
import { useBookingContext } from "../BookingContext";

export default function TinkerList({bookingDetails}) {
const [tinkerList, setTinkerList] = useState([]);
const { customerData, setCustomerData } = useBookingContext();



(async () => {
    try {
      const Result = await apiBooking(bookingDetails).catch((error) => {
        console.log(error); // Handle any errors
      });
  
      console.log(Result);
      setTinkerList(Result);
    } catch (error) {
      console.log(error);
    }
  })();

const handleClick = (e) => {
  console.log(bookingDetails + "Ignore this");
  const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
}

    return(
        <div>
            <h1>Tinker List</h1>
            <div>
                
                  {tinkerList.map((item) => (
                    <div> 
                     <label >
                      <input type="radio" name="client" value={item.clientId} onChange={handleClick} key={item.clientId}></input>
                      {item.name}
                     </label>
                     </div>
                  ))}
                
            </div>
        </div>
    )
}