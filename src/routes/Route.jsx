import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/gadgets.json')
            },
            {
                path: "/statistics",
                element: <Statistics />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
        ]
    },
]);

export default router;  // Export the router itself
