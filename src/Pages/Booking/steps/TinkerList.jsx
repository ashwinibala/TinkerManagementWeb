//import apiBooking from "../../../Services/apiBooking";

import { useBookingContext } from "../BookingContext";

export default function TinkerList({tinkerList}) {

const { customerData, setCustomerData } = useBookingContext();



const handleClick = (e) => {
 
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