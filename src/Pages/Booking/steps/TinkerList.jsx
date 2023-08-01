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
            {Array.isArray(tinkerList) ? (
                tinkerList.map((item) => (
                <div key={item.id}>
                    <label className="m-1">
                    <input type="radio" name="client" value={1} onChange={handleClick}/>
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