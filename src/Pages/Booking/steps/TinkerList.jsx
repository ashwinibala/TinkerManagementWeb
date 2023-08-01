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
            {Array.isArray(tinkerList) ? (
                tinkerList.map((item) => (
                <div key={item.clientId}>
                    <label className="m-1">
                    <input type="radio" name="client" value={item.clientId} onChange={handleClick}/>
                    {item.firstname} {item.lastname}
                    </label>
                </div>
                ))
                ) : (
                <div>No data available.</div>
            )}
        </div>
    )
}