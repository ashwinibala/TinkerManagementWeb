import apiBooking from "../../../Services/apiBooking";
import React, { useState } from "react";

export default function TinkerList({bookingDetails}) {

const [tinkerList, setTinkerList] = useState([]);

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

    return(
        <div>
            <h1>Tinker List</h1>
            <div>
                {tinkerList.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}