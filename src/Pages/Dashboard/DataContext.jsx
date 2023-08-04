import { createContext, useContext, useState } from "react";

const DataContext = createContext({ bookingData: "", setBookingData: null });

export function UseDataContextProvider({ children }) {
    const [bookingData, setBookingData] = useState("");

    return (
        <DataContext.Provider value={{ bookingData, setBookingData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useDataContext() {
    const { bookingData, setBookingData } = useContext(DataContext);

    return { bookingData, setBookingData };
}
