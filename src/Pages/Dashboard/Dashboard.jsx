import React from 'react';
import DashboardHeader from "./DashboardHeader";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const receivedData = location.state;
    console.log(receivedData);
  return (
    <div>
        <DashboardHeader />
      Dashboard comes here
    </div>
  );
};

export default Dashboard;