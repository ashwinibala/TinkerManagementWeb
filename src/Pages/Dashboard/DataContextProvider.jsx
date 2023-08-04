import React from 'react';
import { UseDataContextProvider } from './DataContext.jsx';
import Dashboard from "./Dashboard";
import LoginPage from "./loginPage"

function LoginPage() {
    return (
        <UseDataContextProvider>
            <div>
            <Dashboard />
                <LoginPage />
            </div>
        </UseDataContextProvider>
    );
}

export default LoginPage;