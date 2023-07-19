import { createContext, useContext, useState } from "react";

const BookingContext = createContext({ customerData: "", setCustomerData: null });

export function UseBookingContextProvider({ children }) {
  const [customerData, setCustomerData] = useState("");

  return (
    <BookingContext.Provider value={{ customerData, setCustomerData }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  const { customerData, setCustomerData } = useContext(BookingContext);

  return { customerData, setCustomerData };
}
