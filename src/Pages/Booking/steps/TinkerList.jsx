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
                      <input type="radio" name="client" value={1} onChange={handleClick} key={item.id}></input>
                      {item.firstname}{item.lastname}
                     </label>
                     </div>
                  ))}
                
            </div>
        </div>
    )
}