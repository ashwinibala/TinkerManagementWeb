//import apiBooking from "../../../Services/apiBooking";

import { useBookingContext } from "../BookingContext";

export default function TinkerList({tinkerList, bookingError}) {

const { customerData, setCustomerData } = useBookingContext();



const handleClick = (e) => {
 
  const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
}

    return(
        <div>
            <h1>Tinker List</h1>
            {bookingError.client && <span className="text-red-500 text-xs font-bold h-6 mt-3 leading-8 uppercase">{bookingError.client}</span>}
            {(Array.isArray(tinkerList) && tinkerList.length !== 0)? (
                tinkerList.map((item) => (
                <div key={item.id}>
                    <label className="ml-1">
                    <input className="mr-4" type="radio" name="client" value={item.id} onChange={handleClick}/>
                    {item.firstname} {item.lastname}
                    </label>
                </div>
                ))
                ) : (
                <div>No tinker available. Please Select another time slot</div>
            )}
        </div>
    )
}