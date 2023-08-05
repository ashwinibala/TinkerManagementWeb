import React from 'react';
import DashboardHeader from "./DashboardHeader";
//import {useBookingContext} from "../Booking/BookingContext";
import { useLocation } from 'react-router-dom';

const Dashboard = (props) => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userDataString = searchParams.get('userData');
    console.log(userDataString)
    // Deserialize JSON string to an object
    const parsedUserData = JSON.parse(decodeURIComponent(userDataString));
    console.log(parsedUserData);
    return (
    <div>
        <DashboardHeader />
      Dashboard comes here
    </div>
  );
};

export default Dashboard;