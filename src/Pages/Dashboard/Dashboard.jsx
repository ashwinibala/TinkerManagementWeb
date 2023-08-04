import React from 'react';
import DashboardHeader from "./DashboardHeader";
import {useBookingContext} from "../Booking/BookingContext";

const Dashboard = () => {
    const [bookingData] = useBookingContext();
    console.log(bookingData);
  return (
    <div>
        <DashboardHeader />
      Dashboard comes here
    </div>
  );
};

export default Dashboard;